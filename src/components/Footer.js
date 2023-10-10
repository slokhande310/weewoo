import React from 'react'
import '../styles/Footer.css'
import Appstore  from '../images/appstore.svg';
import Playstore  from '../images/playstore.png';

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-logo-and-app">
                    <div className="footer-logo">WeeWoo</div>
                    <div className="footer-apps">
                        <img src={Appstore} alt="..." />
                        <img src={Playstore} alt="..." />
                    </div>
                </div>
                <div className="about-and-socials">
                    <div className="footer-about">
                        <li className="footer-about-list header">About WeeWoo</li>
                        <li className="footer-about-list">Who We Are</li>
                        <li className="footer-about-list">Blog</li>
                        <li className="footer-about-list">Work with us</li>
                        <li className="footer-about-list">Report Fraud</li>
                        <li className="footer-about-list">Contact Us</li>
                    </div>
                    <div className="footer-about">
                        <li className="footer-about-list header">FOR RESTAURANTS</li>
                        <li className="footer-about-list">Partner With Us</li>
                        <li className="footer-about-list">Apps For You</li>
                        <li className="footer-about-list header">FOR ENTERPRISES</li>
                        <li className="footer-about-list">Zomato For Enterprise</li>
                    </div>
                    <div className="footer-about">
                        <li className="footer-about-list header">LEARN MORE</li>
                        <li className="footer-about-list">Privacy</li>
                        <li className="footer-about-list">Security</li>
                        <li className="footer-about-list">Terms</li>
                        <li className="footer-about-list">Sitemap</li>
                    </div>
                    <div className="footer-socials">
                        <li className="footer-about-list header">SOCIALS</li>
                        <li className="footer-social-links"><a href="/"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li className="footer-social-links"><a href="/"><i className="fa-brands fa-pinterest"></i></a></li>
                        <li className="footer-social-links"><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                        <li className="footer-social-links"><a href="/"><i className="fa-brands fa-x-twitter"></i></a></li>
                    </div>
                </div>
                <div className="copyright"> &#169; 2023 WeeWoo</div>

            </footer>
        </>
    )
}

export default Footer
