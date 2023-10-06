import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <>
            <navbar className="navbar">
                <div className="logo">WeeWoo</div>
                <ul className="navbar-items">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Careers</a></li>
                </ul>
                <div className="user-login">
                    <li className="login-js"><a><i className="fa-regular fa-user"></i> Login </a></li>
                    {/* <li className="sign-up-js"><a><i className="fa-solid fa-user-plus"></i> Sign Up </a></li>  */}
                    <li><a><i className="fa-solid fa-cart-shopping"></i> Cart </a></li>
                </div>
                <div className="menubar">
                    <i className="ham fa-solid fa-bars"></i>
                </div>
            </navbar>
        </>
    )
}

export default Navbar
