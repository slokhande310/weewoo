import React, { useState } from 'react'
import '../styles/Navbar.css'
import '../styles/LoginCard.css'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const [showMenu, setShowMenu] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("cart");
        localStorage.removeItem("userLocation");
        setShowMenu(false);
        setShowProfile(false);
        navigate("/");
    }

    const toggleHamMenu = () => {
        setShowMenu(!showMenu);
        setShowProfile(false);
    }

    const toggleProfileMenu = () => {
        setShowProfile(!showProfile);
        setShowMenu(false);
    }


    return (
        <>
            <div className="navbar">
                <div className="logo"><Link to="/">WeeWoo</Link></div>
                <ul className={`navbar-items ${!showMenu ? 'hide' : 'show'}`}>
                    <li onClick={() => { toggleHamMenu() }} ><Link to="/">Home</Link></li>
                    <li onClick={() => { toggleHamMenu() }}><Link to="/explore">Explore</Link></li>
                    {(localStorage.getItem("authToken"))
                        ?
                        <li><Link to='/myorders'>Orders</Link></li>
                        :
                        ""
                    }
                    <li onClick={() => { toggleHamMenu() }}><Link to="/blog">Blog</Link></li>
                    <li onClick={() => { toggleHamMenu() }}><Link to="/help">Help</Link></li>
                </ul>
                {
                    (localStorage.getItem("authToken"))
                        ? <div className={`user-login ${!showProfile ? 'hide' : 'show'}`}>
                            <li><Link to='/cart'><i className="fa-solid fa-cart-shopping"></i> Cart </Link> { /*data.length === 0 ? "" : <span>{data.length}</span> */} </li>
                            <li onClick={handleLogout}><Link to='/'><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout </Link></li>
                        </div>
                        : <div className={`user-login ${!showProfile ? 'hide' : 'show'}`}>
                            <li onClick={() => { setShowMenu(false); setShowProfile(false) }}><Link to='/login'><i className="fa-regular fa-user"></i> Login </Link></li>
                        </div>
                }

                <div className="menubar" onClick={toggleHamMenu}>
                    <i className="ham fa-solid fa-bars"></i>
                </div>
                <div className="responsive-profile" onClick={toggleProfileMenu}>
                    <i className="fa-regular fa-user"></i>
                </div>
            </div>
        </>
    )
}

export default Navbar
