import React from 'react'
import '../styles/Cart.css'

function Cart() {
    return (
        <>
            <div className="cart-bg-image-tint"></div>
            <div className="cart-bg-image">
                <span>Cart</span>
            </div>
            <div className="cart-outer-width">
                <div className="cart-main-page">
                    <div className="cart-items-and-total-details">
                        <div className="cart-items">
                            <div className="cart-items-header">
                                <div>ORDERED DISHES</div>
                                <div>PRICE</div>
                                <div>QUANTITY</div>
                                <div>TOTAL</div>
                            </div>
                            <div className="cart-items-header">
                                <div>Fish</div>
                                <div>Fish</div>
                                <div>Fish</div>
                                <div>Fish</div>
                            </div>
                            <div className="cart-items-header">
                                <div>Fish</div>
                                <div>Fish</div>
                                <div>Fish</div>
                                <div>Fish</div>
                            </div>
                            <div className="cart-items-header">
                                <div>Fish</div>
                                <div>Fish</div>
                                <div>Fish</div>
                                <div>Fish</div>
                            </div>
                        </div>
                        <div className="center-line"></div>
                        <div className="cart-total">
                            <p>Delivery Charges</p>
                            <p>Free Delivery</p>
                            <p>CALCULATE DELIVERY CHARGE</p>
                            <p>SUBTOTAL <span className='subotal-amt'>$58.00</span></p>
                            <p>TOTAL <span className='total-amt'>$58.00</span></p>
                            <p className='checkout-btn'>PROCEED TO CHECKOUT</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart
