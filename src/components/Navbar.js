import React, { useState } from 'react'
import '../styles/Navbar.css'
import '../styles/LoginCard.css'
import { Link } from 'react-router-dom'

function Navbar() {

    const [showBg, setShowBg] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [credentials, setCredentials] = useState({ name: '', email: '', password: '' });

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:8000/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const savedData = await response.json();
        console.log(savedData);

        if (savedData.success) {
            setCredentials({ name: '', email: '', password: '' });
            toggleSignUpCard();
        }
        if (!savedData.success) {
            alert('Enter valid credentials');
        }
    };

    const onChange = (event) => {
        // updates input on keydown 
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
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

            {/* Login card */}

            <div className={`login-card-bg ${showBg ? 'active' : ''}`} onClick={toggleBg}></div>
            <div id="login-card" className={`login-card ${!showLogin ? '' : 'active'}`}>
                <h2>Login</h2>
                <form className="login-form" method="POST" action='login'>
                    <input onChange={onChange} type="email" name="email" value={credentials.email} placeholder="Email" required />
                    <input onChange={onChange} type="password" name="password" value={credentials.password} placeholder="Password" required />
                    <input type="hidden" name="action" value='login' />
                    <button type="submit" className="otp-btn">Login</button>
                </form>
                <p className="more-options">or</p>
                <p className="login-options"><i className="fa-solid fa-envelope"></i> Login with Email</p>
                <p className="login-options"><i className="fa-brands fa-google"></i> Login with Google</p>
                <p className="new-login">New to WeeWoo? <span onClick={toggleSignUpCard}>Create an account</span></p>
            </div>

            {/* Sign Up card */}

            <div id="sign-up-card" className={`sign-up-card ${!showSignUp ? '' : 'active'}`}>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} className="login-form" method="POST" action='signUp'>
                    <input onChange={onChange} type="text" name="name" value={credentials.name} placeholder="Full Name" required />
                    <input onChange={onChange} type="email" name="email" value={credentials.email} placeholder="Email" required />
                    <input onChange={onChange} type="password" name="password" value={credentials.password} placeholder="Password" required />
                    <input type="hidden" name="action" value='signup' />
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
