import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg'
import answerImg from '../assets/images/answer.svg'
import logoImg from "../assets/images/logo.svg";
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useRoom } from '../hooks/useRoom';
import { database } from "../services/firebase";
import '../styles/room.scss';

interface RoomParams {
    id: string;
}

export function AdminRoom() {
    const history = useHistory();
    const params = useParams<RoomParams>();
    const roomId = params.id;

    const { questions, title } = useRoom(roomId);

    async function handleEndRoom() {
        database.ref(`rooms/${roomId}`).update({
            endedAt: new Date(),
        });

        history.push('/')
    }

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm('Are you sure you want delete this question?')) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    async function handleCheckQuestionAsAnswered(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true,
        });
    }

    async function handleHighLightQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighLighted: true,
        });
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button onClick={handleEndRoom} isOutlined>Delete room</Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Room {title}</h1>
                    {questions.length > 0 && <span>{questions.length} question(s)</span>}
                </div>

                <div className="question-list">
                    {questions.map(question => {
                        return <Question content={question.content} author={question.author} key={question.id} isAnswered={question.isAnswered} isHighLighted={question.isHighLighted}>
                            {!question.isAnswered && (
                                <>
                                    <button type="button" onClick={() => handleCheckQuestionAsAnswered(question.id)}>
                                        <img src={checkImg} alt="Check question as answered" />
                                    </button>
                                    <button type="button" onClick={() => handleHighLightQuestion(question.id)}>
                                        <img src={answerImg} alt="Highlight question" />
                                    </button>
                                </>
                            )}
                            <button type="button" onClick={() => handleDeleteQuestion(question.id)}>
                                <img src={deleteImg} alt="Remover question" />
                            </button>
                        </Question>
                    })}
                </div>
            </main>
        </div>
    )
}
