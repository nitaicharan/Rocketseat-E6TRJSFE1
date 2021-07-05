import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import googleIcon from "../assets/images/google-icon.svg";
import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";
import '../styles/auth.scss';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();
    const [roomCode, setRoomCode] = useState('');

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle();
        }

        history.push('/rooms/new');
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') return;

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert('Room does not exists.')
            return;
        }

        history.push(`/rooms/${roomCode}`);
    }

    return (
        <div id='page-auth'>
            <aside>
                <img src={illustration} alt="Symbolic illustration referring questions and answers" />
                <strong>Create Q&amp;A rooms in live</strong>
                <p>Take out the audience doubts in real time</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logo} alt="Let me ask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIcon} alt="Google Logo" />
                        Create a room with Google account
                    </button>
                    <div className="separator">or get into a room</div>
                    <form onSubmit={handleJoinRoom}>
                        <input onChange={event => setRoomCode(event.target.value)} value={roomCode} type="text" placeholder="Enter with a room code" />
                        <Button type="submit">Enter in the room</Button>
                    </form>
                </div>
            </main>
        </div>
    );
}