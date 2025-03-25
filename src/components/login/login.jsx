import './login.css';
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent form submission default behavior
        
        if (email === "admin@12" && password === "admin") {
            alert("Login Success");
        } else {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 2000);
        }
    }

    return (
        <>
            <h1>Login</h1>
            <div className="login">
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
                {showAlert && (
                <div className="alert-dialog">
                    <div className="alert-content">
                        <h1>Invalid Email or Password</h1>
                    </div>
                </div>)}
            </div>
        </>
    );
};

export default Login;