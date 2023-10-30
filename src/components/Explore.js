import React, { useState, useEffect } from 'react'
import '../styles/Explore.css'
import ExploreFoodCard from './ExploreFoodCard';

function Explore() {

    const capitalizeFirstLetter = word => word && word[0].toUpperCase() + word.slice(1);

    const [menuItem, setMenuItem] = useState([]);
    const [foodCategory, setFoodCategory] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

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

    const handleCheckboxChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((item) => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    }

    const filterMenuItems = menuItem.filter((data) => {
        if (selectedCategories.length === 0) {
            return true; // if no category selected, display all items
        }
        return selectedCategories.includes(data.category);
    })

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
                                            <input
                                                type="checkbox"
                                                id={data.category}
                                                name="food"
                                                value={data.category}
                                                checked={selectedCategories.includes(data.category)}
                                                onChange={() => handleCheckboxChange(data.category)}
                                            />
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
                        filterMenuItems !== ""
                            ? filterMenuItems.map((data) => {
                                return (
                                    <ExploreFoodCard key={data._id} foodItems={data} />
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
