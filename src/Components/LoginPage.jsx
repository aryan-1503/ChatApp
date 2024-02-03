import '../styles/LoginPage.css'
import Login from './Login';
import SignUp from './Signup';
import { useState } from 'react';

export default function LoginPage({ setUserAuthenticated }){
    const [login,setLogin] = useState(false)
    
    const toggle = () => {
        setLogin(!login);
    }
    return (
        <div className='login-page'>
            <div>
                {login ? <Login setUserAuthenticated={setUserAuthenticated} /> : <SignUp setUserAuthenticated={setUserAuthenticated}/>}
            </div>
            <div>
                {login? <div>Don't have an account? <span><button id='toggle' onClick={toggle}>Sign Up</button></span></div> : <div>Already have an account? <span><button id='toggle' onClick={toggle}>Login</button></span></div>}
            </div>
            
        </div>
    )
}
    


