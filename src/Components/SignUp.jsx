import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";


export default function SignUp({ setUserAuthenticated }){
    const [showPass, setShowPass] = useState(false);
    const [loading,setLoading] = useState(false)
    const emailRef = useRef()
    const passRef = useRef()
    const confPassRef = useRef()
    const { signup } = useAuth()
    const toggle = () => {
    setShowPass(!showPass);
    };

    async function handleSubmit(e){
        e.preventDefault()
        if (passRef.current.value !== confPassRef.current.value){
            return alert("The password Doesnt Matches")
        }
        try {
            setLoading(true)
            await signup(emailRef.current.value, passRef.current.value)
            alert("Sign up SuccessFull")
            setUserAuthenticated(true)
        }catch(error){
            alert(error)
        }
        setLoading(false)
    }
    return(
        <div className="main-container">
            <div className="login-container">
                <div className="login-heading">Sign Up</div>
                <form onSubmit={handleSubmit}>
                    <div className="email-input">
                        <label htmlFor="email">
                            <input type="email" ref={emailRef} placeholder="Email id" required />
                        </label>
                    </div>
                    <div className="pass-input">
                        <label htmlFor="">
                            <input type={showPass ? "text" : "password"} ref={passRef} placeholder="Password" required />
                            <button className="eye-btn" onClick={toggle}>{showPass ? <FaEyeSlash /> : <FaEye />}</button>
                        </label>
                    </div>
                    <div className="conf-pass-input">
                        <label htmlFor="conf-pass">
                            <input type="password" ref={confPassRef} placeholder="Confirm Password" required />
                        </label>
                    </div>
                    <div className='login-btn'>
                        <input disabled={loading} type="submit" value="Sign Up"/>
                    </div>
                </form>
            </div>
        </div>
    )
}