import React from 'react';
import '../styles/PopularFood.css';
import item1 from '../images/item1.jpg';
import item2 from '../images/item2.jpg';
import item3 from '../images/item3.jpg';
import item4 from '../images/item4.jpg';

function PopularFood() {
    return (
        <>
            <section className="popular-food">
                <h2>Popular Today</h2>
                <div className="popular-items">
                    <p className="active">Burger</p>
                    <p>Pizza</p>
                    <p>Bowl Food</p>
                    <p>Hot Dog</p>
                </div>
                <div className="popular-card">
                    <div className="popular-card-item">
                        <img src={item1} alt='burger' />
                        <h3>Cheese Burger with Salad</h3>
                        <p className="popular-card-item-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit....</p>
                        <p className="popular-card-item-price">$19.00</p>
                        <span className="add-to-card-btn">Add to cart</span>
                    </div>
                    <div className="popular-card-item">
                        <img src={item2} alt='burger' />
                        <h3>Royal Cheese Burger with Bacon</h3>
                        <p className="popular-card-item-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit....</p>
                        <p className="popular-card-item-price">$13.49</p>
                        <span className="add-to-card-btn">Add to cart</span>
                    </div>
                    <div className="popular-card-item">
                        <img src={item3} alt='burger' />
                        <h3>Black Gamburger with Fishcake</h3>
                        <p className="popular-card-item-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit....</p>
                        <p className="popular-card-item-price">$24.99</p>
                        <span className="add-to-card-btn">Add to cart</span>
                    </div>
                    <div className="popular-card-item">
                        <img src={item4} alt='burger' />
                        <h3>Classic Bacon Hamburger</h3>
                        <p className="popular-card-item-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit....</p>
                        <p className="popular-card-item-price">$11.99</p>
                        <span className="add-to-card-btn">Add to cart</span>
                    </div>
                </div>

            </section>
        </>
    )
}

export default PopularFood
