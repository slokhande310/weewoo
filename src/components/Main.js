import React, { useState } from 'react'
import '../styles/Main.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const location = require('../json/location.json')
const carousel = require('../json/carousel.json')


function Main() {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSearch = (searchTerm) => {
        if (searchTerm === '') {
            console.log('nothing');
        } else {
            setValue(searchTerm);
            console.log(searchTerm);
        }
    }

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <main className="main">
                <div className="main_carousel">
                    <Slider {...settings} >
                        {
                            carousel.map(d => {
                                return (
                                    <div key={d.id}>
                                        <img src={d.image} alt={d.image} />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
                <div className="delivery_section">
                    <h1>Order food to your door</h1>
                    <div className="delivery-content">
                        <div className="delivery-addr">
                            <div className="pin"><i className="fa-solid fa-location-dot"></i></div>
                            <input type="text" value={value} onChange={onChange} placeholder="Enter delivery address" />
                        </div>
                        <button className={`find-food-btn ${value === '' ? "disabled" : ""}`} onClick={() => onSearch(value)}>Find Food</button>
                        <div className="delivery-addr-dropdown">
                            {location.filter(item => {
                                const searchTerm = value.toLowerCase();
                                const name = item.name.toLowerCase();

                                // searchTerm hides all suggestions && name.startsWith shows all suggestions && once clicked or written full name of location, closes dropdown
                                return searchTerm && name.startsWith(searchTerm) && name !== searchTerm;
                            }).slice(0, 5)
                                .map((item) => (
                                    <div onClick={() => onSearch(item.name)}
                                        className="dropdown-row" key={item.id}>
                                        {item.name}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main
