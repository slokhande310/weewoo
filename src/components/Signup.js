import React, { useState } from 'react'
import '../styles/Signup.css'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {

    const [credentials, setCredentials] = useState({ name: '', email: '', password: '' });

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:8000/signup', {
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
            navigate('/login');
        }
        if (!savedData.success) {
            alert('Enter valid credentials');
        }
    }

    const onChange = (event) => {
        // updates input on keydown 
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };


    return (
        <>
            <div className="login-screen">
                <form onSubmit={handleSubmit} className='login-screen-form' method="post">
                    <h1>Sign Up</h1>
                    <div className="input-container">
                        <input onChange={onChange} type="name" required name='name' value={credentials.name} placeholder="Name" />
                    </div>
                    <div className="input-container">
                        <input onChange={onChange} type="email" required name='email' value={credentials.email} placeholder="Email" />
                    </div>
                    <div className="input-container">
                        <input onChange={onChange} type="password" required name='password' value={credentials.password} placeholder="Password" />
                    </div>
                    <div className="login-screen-btn">
                        <button type="submit">Sign up</button>
                    </div>
                    <p className='login-screen-p'>Already have an account? <Link to='/login'>Log in</Link></p>
                </form>
            </div>
        </>
    )
}

export default Signup
