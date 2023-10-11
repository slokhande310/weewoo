import React, { useState } from 'react'
import '../styles/Main.css'
const location = require('../json/location.json')

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

    return (
        <>
            <main className="main">
                <h1>Order food to your door</h1>
                <div className="delivery-content">
                    <div className="delivery-addr">
                        <div className="pin"><i className="fa-solid fa-location-dot"></i></div>
                        <input type="text" value={value} onChange={onChange} placeholder="Enter delivery address" />
                    </div>
                    <div className="find-food-btn" onClick={() => onSearch(value)}>Find Food</div>
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
            </main>
        </>
    )
}

export default Main
