import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";
import '../styles/auth.scss';

export function NewRoom() {
    const { user } = useAuth();
    const history = useHistory();
    const [newRoom, setNewRoom] = useState('')

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (!newRoom.trim()) return;

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        });

        history.push(`/rooms/${firebaseRoom.key}`);
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
                    <h2>Create a new room</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input onChange={event => setNewRoom(event.target.value)} value={newRoom} type="text" placeholder=" Room name" />
                        <Button type="submit">Create new room</Button>
                    </form>
                    <p>Would you like to access a created room? <Link to="/">Click here</Link></p>
                </div>
            </main>
        </div>
    );
}