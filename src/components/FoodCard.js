import React from 'react'
import '../styles/FoodCard.css'

function FoodCards() {
    return (
        <>
            <section className="food-cards">
                <div className="card-items"><i className="fa-solid fa-burger"></i><span>Burger</span></div>
                <div className="card-items"><i className="fa-solid fa-pizza-slice"></i><span>Pizza</span></div>
                <div className="card-items"><i className="fa-solid fa-bowl-food"></i><span>Bowl Food</span></div>
                <div className="card-items"><i className="fa-solid fa-hotdog"></i><span>Hot Dog</span></div>
            </section>
        </>
    )
}

export default FoodCards
