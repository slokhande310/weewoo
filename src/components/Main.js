import React, { useEffect, useState } from 'react'
import '../styles/Main.css'

const location = require('../json/location.json')

function Main() {
    const [value, setValue] = useState('');
    const [userLocation, setUserLocation] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    useEffect(() => {
        // Initialize userLocation from local storage when the component mounts
        const storedUserLocation = localStorage.getItem('userLocation');
        if (storedUserLocation) {
            setUserLocation(storedUserLocation);
        }
    }, []);

    const changeLocation = () => {
        localStorage.removeItem('userLocation')
        setUserLocation('');
        setValue('');
    }

    const onSearch = async (searchTerm) => {
        const findLocation = location.find(item => searchTerm === item.name);
        if (searchTerm === '') {
            return
        } else if (findLocation) {
            setValue(searchTerm);
            setUserLocation(searchTerm);
            await localStorage.setItem('userLocation', searchTerm);
            console.log('i am local storage ' + localStorage.getItem('userLocation'));
            console.log('We deliver', searchTerm);

        } else {
            await localStorage.removeItem('userLocation');
            setUserLocation('');
            console.log('We dont deliver', searchTerm);
            console.log('i am local storage ' + localStorage.getItem('userLocation'));
        }
    }

    const handleDropdownItemClick = (selectedLocation) => {
        setValue(selectedLocation);
    }

    return (
        <>
            <main className="main">
                <div className={`delivery_section_location ${userLocation ? '' : 'hide'}`}>
                    <h3>Location: <span >{userLocation}</span></h3>
                    <p onClick={changeLocation}>Change location...</p>
                </div>

                <div className={`delivery_section ${userLocation ? 'hide' : ''}`}>
                    <h1>Order food to your door</h1>
                    <div className="delivery-content">
                        <div className="delivery-addr">
                            <div className="pin"><i className="fa-solid fa-location-dot"></i></div>
                            <input type="text" value={value} onChange={onChange} placeholder="Enter delivery address" />
                        </div>
                        <button className={`find-food-btn ${value === '' ? "disabled" : ""}`} onClick={() => { onSearch(value) }}>Find Food</button>

                        <div className="delivery-addr-dropdown">
                            {
                                location.filter(item => {
                                    const searchTerm = value.toLowerCase();
                                    const name = item.name.toLowerCase();

                                    // searchTerm hides all suggestions && name.startsWith shows all suggestions && once clicked or written full name of location, closes dropdown
                                    return searchTerm && name.startsWith(searchTerm) && name !== searchTerm;
                                }).slice(0, 5)
                                    .map((item) => (
                                        <div onClick={() => handleDropdownItemClick(item.name)}
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
