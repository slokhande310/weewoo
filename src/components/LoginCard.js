import React from 'react';
import '../styles/LoginCard.css';

function LoginCard() {

    return (
        <>
            <div className="login-card-bg"></div>
            <div id="login-card" className="login-card">
                <h2>Login</h2>
                <form className="login-form" action="">
                    <input type="number" name="" placeholder="Mobile" required />
                    <button type="submit" className="otp-btn">Send One Time Password</button>
                </form>
                <p className="more-options">or</p>
                <p className="login-options"><i className="fa-solid fa-envelope"></i> Login with Email</p>
                <p className="login-options"><i className="fa-brands fa-google"></i> Login with Google</p>
                <p className="new-login">New to WeeWoo? <a className="sign-up-js" href="#">Create an account</a></p>
            </div>

            <div id="sign-up-card" className="sign-up-card">
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
                <p className="new-login">Already have an account? <a className="login-js" href="#">Log in</a></p>
            </div>
        </>
    );
}

export default LoginCard
