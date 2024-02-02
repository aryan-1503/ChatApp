import '../styles/Header.css'
import { IoChatbubblesOutline } from "react-icons/io5";
import Login from "./Login.jsx";
// eslint-disable-next-line react/prop-types
export default function Header({ onLoginClick }){

    return (
        <div className="header">
            <div className="name">
                <IoChatbubblesOutline /> One chat
            </div>
            <div className="links">
                <button id="button" onClick={onLoginClick}>Login</button>
            </div>
        </div>
    )
}

