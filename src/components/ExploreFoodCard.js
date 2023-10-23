import React from 'react'
import item1 from '../images/burger1.jpg';
import { useCart, useDispatchCart } from './ContextReducer';

function ExploreFoodCard(props) {
    let { id, name, rating, price, description } = props.foodItems;
    let dispatch = useDispatchCart();
    let data = useCart();

    const handleAddToCart = async () => {
        // onclick, id, name, price sent to cart and used further to display
        await dispatch({ type: "ADD", id: id, name: name, price: price });
        console.log(data);
    }
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
                    <button className='explore-food-item-btn' onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default ExploreFoodCard
