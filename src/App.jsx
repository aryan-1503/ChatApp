import { useState } from 'react'
import './App.css'
import Header from './Components/Header'

import { AuthProvider } from './context/AuthContext'

import LoginPage from "./Components/LoginPage.jsx";


function App() {
    const [showLogin,setShowLogin] = useState(false)
    const [userAuthenticated,setUserAuthenticated] = useState(false)

    const handleLoginBtn = () => {
        setShowLogin(!showLogin)
    }

    return (
        <AuthProvider>
        <div className="header">
            <Header onLoginClick={handleLoginBtn} isAuthenticated={userAuthenticated} setUserAuthenticated={setUserAuthenticated}/>
         </div>
        <div className="login">
            {!userAuthenticated && <LoginPage setUserAuthenticated={setUserAuthenticated} />}
         </div>
        </AuthProvider>
    )
}

export default App
