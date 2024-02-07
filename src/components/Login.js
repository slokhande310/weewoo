import React, { useState } from 'react'
import '../styles/Signup.css'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('https://weewoo-food-app.onrender.com/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const savedData = await response.json();
    console.log(savedData);

    if (savedData.success) {
      setCredentials({ email: '', password: '' });
      localStorage.setItem("authToken", savedData.authToken);
      localStorage.setItem("userEmail", credentials.email);
      console.log(localStorage.getItem("authToken"));
      navigate('/');
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
        <form onSubmit={handleLogin} className='login-screen-form' action="" method="post">
          <h1>Login</h1>
          <div className="input-container">
            <input onChange={onChange} name='email' type="email" value={credentials.email} required placeholder="Email" />
          </div>
          <div className="input-container">
            <input onChange={onChange} name='password' type="password" value={credentials.password} required placeholder="Password" />
          </div>
          <div className="login-screen-btn">
            <button type="submit">Login</button>
          </div>
          <p className='login-screen-p'>New to WeeWoo? <Link to='/signup'>Create an account</Link></p>
        </form>
      </div>
    </>
  )
}

export default Login
