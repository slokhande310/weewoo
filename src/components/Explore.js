import React from 'react'
import '../styles/Explore.css'
import item1 from '../images/item1.jpg';

function Explore() {
    return (
        <>
            <div className="explore-page">
                <div class="sidebar">
                    <h2>Food Preferences</h2>
                    <div className="pizza-checkbox">
                        <input type="checkbox" id="pizza" name="food" value="pizza" />
                        <label for="pizza">Pizza</label>
                    </div>
                    <div className="burger-checkbox">
                        <input type="checkbox" id="burger" name="food" value="burger" />
                        <label for="burger">Burger</label>
                    </div>
                    <div className="indian-cuisine-checkbox">
                        <input type="checkbox" id="indianCuisine" name="food" value="indianCuisine" />
                        <label for="indianCuisine">Indian Cuisines</label>
                    </div>
                    <div className="desserts-checkbox">
                        <input type="checkbox" id="desserts" name="food" value="desserts" />
                        <label for="desserts">Desserts</label>
                    </div>
                </div>
                <div className="explore-food">
                    <div className="explore-food-item">
                        <div className="explore-food-item-rating">
                            <i class="fa-solid fa-star"></i> <span>4.5</span>
                        </div>
                        <img src={item1} alt="" />
                        <div className="explore-food-item-info">
                            <h3>Classic Cheeseburger</h3>
                            <p className="explore-food-item-info-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, nemo.</p>
                            <p className="explore-food-item-info-price">$9.00</p>
                            <button className='explore-food-item-btn'>Add to Cart</button>
                        </div>
                    </div>
                    <div className="explore-food-item">
                        <div className="explore-food-item-rating">
                            <i class="fa-solid fa-star"></i> <span>4.5</span>
                        </div>
                        <img src={item1} alt="" />
                        <div className="explore-food-item-info">
                            <h3>Classic Cheeseburger</h3>
                            <p className="explore-food-item-info-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, nemo.</p>
                            <p className="explore-food-item-info-price">$9.00</p>
                            <button className='explore-food-item-btn'>Add to Cart</button>
                        </div>
                    </div>
                    <div className="explore-food-item">
                        <div className="explore-food-item-rating">
                            <i class="fa-solid fa-star"></i> <span>4.5</span>
                        </div>
                        <img src={item1} alt="" />
                        <div className="explore-food-item-info">
                            <h3>Classic Cheeseburger</h3>
                            <p className="explore-food-item-info-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, nemo.</p>
                            <p className="explore-food-item-info-price">$9.00</p>
                            <button className='explore-food-item-btn'>Add to Cart</button>
                        </div>
                    </div>
                    <div className="explore-food-item">
                        <div className="explore-food-item-rating">
                            <i class="fa-solid fa-star"></i> <span>4.5</span>
                        </div>
                        <img src={item1} alt="" />
                        <div className="explore-food-item-info">
                            <h3>Classic Cheeseburger</h3>
                            <p className="explore-food-item-info-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, nemo.</p>
                            <p className="explore-food-item-info-price">$9.00</p>
                            <button className='explore-food-item-btn'>Add to Cart</button>
                        </div>
                    </div>
                    <div className="explore-food-item">
                        <div className="explore-food-item-rating">
                            <i class="fa-solid fa-star"></i> <span>4.5</span>
                        </div>
                        <img src={item1} alt="" />
                        <div className="explore-food-item-info">
                            <h3>Classic Cheeseburger</h3>
                            <p className="explore-food-item-info-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, nemo.</p>
                            <p className="explore-food-item-info-price">$9.00</p>
                            <button className='explore-food-item-btn'>Add to Cart</button>
                        </div>
                    </div>
                    <div className="explore-food-item">
                        <div className="explore-food-item-rating">
                            <i class="fa-solid fa-star"></i> <span>4.5</span>
                        </div>
                        <img src={item1} alt="" />
                        <div className="explore-food-item-info">
                            <h3>Classic Cheeseburger</h3>
                            <p className="explore-food-item-info-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, nemo.</p>
                            <p className="explore-food-item-info-price">$9.00</p>
                            <button className='explore-food-item-btn'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore
