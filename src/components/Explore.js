import React, { useState, useEffect } from 'react'
import '../styles/Explore.css'
import ExploreFoodCard from './ExploreFoodCard';

function Explore() {

    const capitalizeFirstLetter = word => word && word[0].toUpperCase() + word.slice(1);

    const [menuItem, setMenuItem] = useState([]);
    const [foodCategory, setFoodCategory] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://127.0.0.1:8000/explore", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();
        // console.log(response[0], response[1]);
        setMenuItem(response[0]);
        setFoodCategory(response[1]);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <div className="explore-page">
                <div className="sidebar">
                    <h2>Food Preferences</h2>
                    {
                        foodCategory !== ""
                            ? foodCategory.map((data) => {
                                return (
                                    <div key={data._id}>
                                        <div className={`${data.category}-checkbox`}>
                                            <input type="checkbox" id={data.category} name="food" value={data.category} />
                                            <label htmlFor={data.category}>{data.category === 'indian cuisine' ? "Indian Cuisine" : capitalizeFirstLetter(data.category)}</label>
                                        </div>
                                    </div>
                                )
                            })
                            : ""
                    }
                </div>
                <div className="explore-food">
                    {
                        menuItem !== ""
                            ? menuItem.map((data) => {
                                return (
                                    <ExploreFoodCard key={data._id} rating={data.rating} name={data.name} price={data.price} description={data.description} image={data.image} />
                                )
                            })
                            : ""
                    }
                </div>
            </div >
        </>
    )

}

export default Explore
