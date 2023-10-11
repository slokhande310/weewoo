import React, { useState } from 'react'
import '../styles/Navbar.css'
import '../styles/LoginCard.css'
import { Link } from 'react-router-dom'

function Navbar() {

    const [showBg, setShowBg] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const toggleBg = () => {
        setShowBg(!showBg);
        if (showLogin || showSignUp) {
            setShowLogin('');
            setShowSignUp('');
        }
    }

    const toggleLoginCard = () => {
        setShowLogin(!showLogin);
        setShowBg(!showBg);
    }

    const toggleSignUpCard = () => {
        setShowSignUp(!showSignUp);
        setShowLogin(!showLogin);
    }

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
                    <li onClick={toggleLoginCard}><span><i className="fa-regular fa-user"></i> Login </span></li>
                    <li><Link to='/cart'><i className="fa-solid fa-cart-shopping"></i> Cart </Link></li>
                </div>
                <div className="menubar">
                    <i className="ham fa-solid fa-bars"></i>
                </div>
            </div>

            <div className={`login-card-bg ${showBg ? 'active' : ''}`} onClick={toggleBg}></div>
            <div id="login-card" className={`login-card ${!showLogin ? '' : 'active'}`}>
                <h2>Login</h2>
                <form className="login-form" action="">
                    <input type="number" name="" placeholder="Mobile" required />
                    <button type="submit" className="otp-btn">Send One Time Password</button>
                </form>
                <p className="more-options">or</p>
                <p className="login-options"><i className="fa-solid fa-envelope"></i> Login with Email</p>
                <p className="login-options"><i className="fa-brands fa-google"></i> Login with Google</p>
                <p className="new-login">New to WeeWoo? <span onClick={toggleSignUpCard}>Create an account</span></p>
            </div>

            <div id="sign-up-card" className={`sign-up-card ${!showSignUp ? '' : 'active'}`}>
                <h2>Sign Up</h2>
                <form className="login-form" action="">
                    <input type="text" name="" placeholder="Full Name" required />
                    <input type="email" name="" placeholder="Email" required />
                    <div className="t-and-c">
                        <input type="checkbox" id="t-and-c-checkbox" required /> I agree to WeeWoo's Terms of Service, Privacy Policy and Content Policies
                    </div>
                    <button type="submit" className="otp-btn">Create account</button>
                </form>
                <p className="more-options">or</p>
                <p className="login-options"><i className="fa-brands fa-google"></i> Login with Google</p>
                <p className="new-login">Already have an account? <span className={` ${showLogin ? 'active' : ''}`} onClick={toggleSignUpCard}>Log in</span></p>
            </div>
        </>
    )
}

export default Navbar
