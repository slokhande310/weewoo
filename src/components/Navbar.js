import React from 'react'
import '../styles/Navbar.css'
import '../styles/LoginCard.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo"><Link to="/">WeeWoo</Link></div>
                <ul className="navbar-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/explore">Explore</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/help">Help</Link></li>
                </ul>
                <div className="user-login">
                    <li><Link to='/login'><i className="fa-regular fa-user"></i> Login </Link></li>
                    <li style={{ display: 'none' }}><Link to='/cart'><i className="fa-solid fa-cart-shopping"></i> Cart </Link></li>
                </div>
                <div className="menubar">
                    <i className="ham fa-solid fa-bars"></i>
                </div>
            </div>
        </>
    )
}

export default Navbar
