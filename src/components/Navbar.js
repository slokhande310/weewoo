import React from 'react'
import '../styles/Navbar.css'
import '../styles/LoginCard.css'
import { Link, useNavigate } from 'react-router-dom'
// import { useCart } from './ContextReducer';

function Navbar() {
    // let data = useCart();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("cart");
        localStorage.removeItem("userLocation");
        navigate("/");
    }

    return (
        <>
            <div className="navbar">
                <div className="logo"><Link to="/">WeeWoo</Link></div>
                <ul className="navbar-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/explore">Explore</Link></li>
                    {(localStorage.getItem("authToken"))
                        ?
                        <li><Link to='/myorders'>Orders</Link></li>
                        :
                        ""
                    }
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/help">Help</Link></li>
                </ul>
                {
                    (localStorage.getItem("authToken"))
                        ? <div className="user-login">
                            <li><Link to='/cart'><i className="fa-solid fa-cart-shopping"></i> Cart </Link> { /*data.length === 0 ? "" : <span>{data.length}</span> */} </li>
                            <li onClick={handleLogout}><Link to='/'><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout </Link></li>
                        </div>
                        : <div className="user-login">
                            <li><Link to='/login'><i className="fa-regular fa-user"></i> Login </Link></li>
                        </div>
                }

                <div className="menubar">
                    <i className="ham fa-solid fa-bars"></i>
                </div>
            </div >
        </>
    )
}

export default Navbar
