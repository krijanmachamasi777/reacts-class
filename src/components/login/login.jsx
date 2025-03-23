import './login.css';
import React, { Component, useState } from 'react';

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [showAlert, setshowalert] = useState(false);
    const handelLogin = () => {
        if (email === "admin@12" && password === "admin") {

            alert("Login Success");
        } else {
            setshowalert(true);
            setTimeout(() => setshowalert(false), 3000);
        }
    }
    return (
        <>

            <h1>Login</h1>
            <div className="login">
                <form>
                    <input type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />
                    <input type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    <button onClick={handelLogin}>Login</button>
                </form>
            </div>

            {showAlert && (
                <div className="alert-dialog">
                    <div className="alert-content">
                        <h1>Invalid Email or Password</h1>
                    </div>
                </div>)}



        </>
    );
};
export default Login;