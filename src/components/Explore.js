import React, { useState, useEffect } from 'react'
import '../styles/Explore.css'
import ExploreFoodCard from './ExploreFoodCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Explore() {

    const capitalizeFirstLetter = word => word && word[0].toUpperCase() + word.slice(1);

    const [menuItem, setMenuItem] = useState([]);
    const [foodCategory, setFoodCategory] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [visibleItems, setVisibleItems] = useState(12);

    const handleLoadMore = () => {
        // Increase the number of visible items by 10 (or any desired increment)
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 12);
      };

    const loadData = async () => {
        let response = await fetch("https://weewoo-food-app.onrender.com/explore", {
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

    const notify = (message, condition) => {
        const toastStyle = {
            background: condition === 'success' ? '#4CAF50' : '#F44336',
            color: '#fff'
        }
        toast.info(message, {
            style: toastStyle
        });
    };

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
                    {filterMenuItems.slice(0, visibleItems).map((data) => (
                        <ExploreFoodCard key={data._id} foodItems={data} notify={notify} />
                    ))}

                    {visibleItems < filterMenuItems.length && (
                        <span className='load-more-btn' onClick={handleLoadMore}>Load More</span>
                    )}
                </div>
            </div >
        </>
    )

}

export default Explore
