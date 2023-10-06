import React from 'react'
import '../styles/Main.css'

function Main() {
    return (
        <>
            <main className="main">
                <h1>Order food to your door</h1>
                <div className="delivery-content">
                    <div className="delivery-addr">
                        <div className="pin"><i className="fa-solid fa-location-dot"></i></div>
                        <input type="text" placeholder="Enter delivery address" />
                    </div>
                    <div className="find-food-btn">Find Food</div>
                </div>
            </main>
        </>
    )
}

export default Main
