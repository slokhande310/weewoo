import React from 'react'
import { useDispatchCart } from './ContextReducer';

function ExploreFoodCard(props) {
    let { id, name, rating, price, description, image } = props.foodItems;
    let dispatch = useDispatchCart();

    const handleAddToCart = async () => {
        const quantity = 1;
        // onclick, id, name, price sent to cart and used further to display
        await dispatch({
            type: "ADD",
            id: id,
            name: name,
            price: price,
            quantity: quantity
        });

        // Retrieve and parse the existing cart data from local storage
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the item already exists in the cart
        const itemExists = existingCart.some(item => item.id === id);

        if (!itemExists) {
            // If the item doesn't exist in the cart, add it
            const updatedCart = [...existingCart, { id, name, price, quantity }];

            // Store the updated cart data in local storage
            localStorage.setItem('cart', JSON.stringify(updatedCart));

            props.notify('Item added to the cart', 'success');
            console.log(updatedCart);
        } else {
            // Handle the case where the item already exists in the cart
            props.notify('Item already in the cart', 'error');
        }
    }
    return (
        <>
            <div className="explore-food-item">
                <div className="explore-food-item-rating">
                    <i className="fa-solid fa-star"></i><span>{rating}</span>
                </div>
                <img src={image} alt="img" />
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
