import { Link, Outlet } from "react-router-dom";
import './home.css';
import { useEffect, useState } from "react";
const NavBar = () => {
    const [time, settime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            settime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    });
    
    return (
        <>
            <nav className="navbar">
                <div className="logo">Movies App</div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/contact-us">Contact Us</Link>
                    <Link to="/todo-list">Todo List</Link>
                <Link to="component-one">Component One</Link>
                <Link to="login">Login</Link>
                </div>
                <div className="clock-container">
                    {time.toLocaleTimeString()}
                </div>


            </nav>
            <Outlet />
        </>

    )
}

export default NavBar;