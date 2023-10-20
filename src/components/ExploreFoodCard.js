import React from 'react'
import item1 from '../images/burger1.jpg';

function ExploreFoodCard(props) {
    let { name, rating, price, description } = props;
    return (
        <>
            <div className="explore-food-item">
                <div className="explore-food-item-rating">
                    <i className="fa-solid fa-star"></i><span>{rating}</span>
                </div>
                <img src={item1} alt="img" />
                <div className="explore-food-item-info">
                    <h3>{name}</h3>
                    <p className="explore-food-item-info-desc">{description}</p>
                    <p className="explore-food-item-info-price">${price}</p>
                    <button className='explore-food-item-btn'>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default ExploreFoodCard
