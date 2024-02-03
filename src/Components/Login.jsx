import {useRef, useState} from 'react'
import '../styles/Login.css'
import {useAuth} from "../context/AuthContext.jsx";
export default function Login({ setUserAuthenticated }){
    const emailRef = useRef()
    const passRef = useRef()
    const [loading,setLoading] = useState(false)
    const { login } = useAuth()
    async function handleSubmit(e){
        e.preventDefault()
        try {
            setLoading(true)
            await login(emailRef.current.value, passRef.current.value)
            alert("Login Successfull")
            setUserAuthenticated(true)
        }catch{
            alert("Incorrect Email or Password!")
        }
        setLoading(false)
    }
    return (
        <div className="main-container">
            <div className="login-container">
                <div className="login-heading">Login</div>
                <form onSubmit={handleSubmit}>
                    <div className="email-input">
                        <label htmlFor="email">
                            <input type="email" ref={emailRef} placeholder="Email id" required/>
                        </label>
                    </div>
                    <div className="pass-input">
                        <label htmlFor="">
                            <input type="password" ref={passRef} placeholder="Password" required/>
                        </label>
                    </div>
                    <div className='login-btn'>
                        <label htmlFor="login">
                            <input type="submit" disabled={loading} value="Login"/>
                        </label>
                    </div>
                </form>
            </div>

        </div>
    )
}