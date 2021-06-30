import { auth, firebase } from "../services/firebase";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import googleIcon from "../assets/images/google-icon.svg";
import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import '../styles/auth.scss';
import { AuthContext } from "../contexts/AuthContext";
import { useAuth } from "../hooks/useAuth";

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle();
        }

        history.push('/rooms/new');
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
                    <form>
                        <input type="text" placeholder="Enter with a room code" />
                        <Button type="submit">Enter in the room</Button>
                    </form>
                </div>
            </main>
        </div>
    );
}