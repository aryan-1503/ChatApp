import '../styles/Header.css'
import { IoChatbubblesOutline } from "react-icons/io5";
import {useAuth} from "../context/AuthContext.jsx";
export default function Header({ onLoginClick , isAuthenticated , setUserAuthenticated }){
    const { logout } = useAuth();
    async function handleLogout(){
        await logout()
        setUserAuthenticated(false)
    }
    return (
        <div className="header">
            <div className="name">
                <IoChatbubblesOutline /> One chat
            </div>
            <div className="links">
                {isAuthenticated && <div className="display-name">Username</div> }
                {isAuthenticated && <button onClick={handleLogout} id='logout'>Log out</button> }
                {!isAuthenticated &&  <button id="button" onClick={onLoginClick}>Login</button>}
            </div>
        </div>
    )
}

