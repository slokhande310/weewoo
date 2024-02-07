import { React, useEffect, useState } from 'react';
import '../styles/PopularFood.css';
import { useDispatchCart } from './ContextReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PopularFood() {
    const [active, setActive] = useState('burger');
    const [popularFoodItem, setpopularFoodItem] = useState([]);

    let dispatch = useDispatchCart();

    const loadData = async () => {
        let response = await fetch("https://weewoo-food-app.onrender.com/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();
        setpopularFoodItem(response);
        // console.log(response);
    }

    useEffect(() => {
        loadData();
    }, []);

    const handleClick = (item) => {
        setActive(item);
    }

    const notify = (message, condition) => {
        const toastStyle = {
            background: condition === 'success' ? '#4CAF50' : '#F44336',
            color: '#fff'
        }
        toast.info(message, {
            style: toastStyle
        });
    };

    const handleAddToCart = async (item) => {
        const quantity = 1;
        // onclick, id, name, price sent to cart and used further to display
        await dispatch({
            type: "ADD",
            id: item._id,
            name: item.name,
            price: item.price,
            quantity: quantity
        });

        // Retrieve the existing cart data from local storage
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the item already exists in the cart
        const itemExists = existingCart.some((cartItem) => cartItem.id === item._id);

        if (!itemExists) {
            // Append the new item to the existing cart data
            existingCart.push({ id: item._id, name: item.name, price: item.price, quantity: item.quantity });

            // Store the updated cart data in local storage
            localStorage.setItem('cart', JSON.stringify(existingCart));
            notify('Item added to the cart', 'success');
        } else {
            notify('Item already in the cart', 'error');
        }

    }

    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="colored"
            />
            <section className="popular-food">
                <h2>Popular Today</h2>
                <div className="popular-items">
                    <p onClick={() => handleClick('burger')} className={active === 'burger' ? 'active' : ''}>Burger</p>
                    <p onClick={() => handleClick('pizza')} className={active === 'pizza' ? 'active' : ''}>Pizza</p>
                    <p onClick={() => handleClick('bowlfood')} className={active === 'bowlfood' ? 'active' : ''}>Bowl Food</p>
                    <p onClick={() => handleClick('hotdog')} className={active === 'hotdog' ? 'active' : ''}>Hot Dog</p>
                </div>
                <div className="popular-card">
                    {
                        popularFoodItem !== ""
                            ? popularFoodItem.filter(data => data.category === active)
                                .map((data) => {
                                    return (
                                        <div className="popular-card-item" key={data._id}>
                                            <img src={data.image} alt={`${data.category}`} />
                                            {/* <img src={active === 'burger' ? burger1 : (active === 'pizza' ? pizza1 : (active === 'bowlfood' ? bowlFood1 : hotdog1))} alt={`${data.category}`} /> */}
                                            <h3>{data.name}</h3>
                                            <p className="popular-card-item-desc">{data.description}</p>
                                            <p className="popular-card-item-price">${data.price}</p>
                                            <span className="add-to-card-btn" onClick={() => handleAddToCart(data)}>Add to cart</span>
                                        </div>
                                    )
                                })
                            : ""
                    }
                </div>
            </section>
        </>
    )
}

export default PopularFood
