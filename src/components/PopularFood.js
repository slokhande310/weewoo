import { React, useEffect, useState } from 'react';
import '../styles/PopularFood.css';
import { useCart, useDispatchCart } from './ContextReducer';

function PopularFood() {
    const [active, setActive] = useState('burger');
    const [popularFoodItem, setpopularFoodItem] = useState([]);

    let dispatch = useDispatchCart();
    let data = useCart();

    const loadData = async () => {
        let response = await fetch("http://127.0.0.1:8000/", {
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

    const handleAddToCart = async (item) => {
        await dispatch({
            type: "ADD",
            id: item._id,
            name: item.name,
            price: item.price
        });
        console.log(data);
    }

    return (
        <>
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
