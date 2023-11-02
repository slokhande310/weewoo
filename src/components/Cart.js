import React, { useEffect, useState } from 'react'
import '../styles/Cart.css'
import { useCart, useDispatchCart } from './ContextReducer';

function Cart() {

    let data = useCart();
    let dispatch = useDispatchCart();
    // data from local storage is store in cartData
    const [cartData, setCartData] = useState([]); // State to hold cart data

    useEffect(() => {
        // Retrieve cart data from localStorage
        const cartFromStorage = JSON.parse(localStorage.getItem('cart'));

        if (cartFromStorage) {
            // Ensure that each item in the cart has a quantity property
            const updatedCartData = cartFromStorage.map((item) => ({ ...item, quantity: item.quantity || 1 }));
            setCartData(updatedCartData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const increaseQuantity = (item) => {
        // Increase the quantity of an item
        const updatedCartData = cartData.map((cartItem) => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
        });

        setCartData(updatedCartData);
        localStorage.setItem('cart', JSON.stringify(updatedCartData));
    }

    const decreaseQuantity = (item) => {
        // Decrease the quantity of an item
        const updatedCartData = cartData.map((cartItem) => {
            if (cartItem.id === item.id && cartItem.quantity > 1) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
        });

        setCartData(updatedCartData);
        localStorage.setItem('cart', JSON.stringify(updatedCartData));
    }

    // to calculate subtotal, delivery charges and taxes excluded
    const calculateSubtotal = () => {
        let subtotal = 0;
        for (const item of cartData) {
            subtotal += item.quantity * item.price;
        }
        return subtotal;
    }

    // total after including subtotal, taxes and delivery charges
    const calculateTotal = () => {
        const subtotal = calculateSubtotal();

        // Calculate taxes (e.g., 10% tax rate)
        const taxRate = 0.1; // 10% tax rate
        const taxAmount = subtotal * taxRate;

        return subtotal + taxAmount;
    }

    // to remove specific item when clicked on trash icon
    const removeItem = (itemToRemove) => {
        const updatedCartData = cartData.filter((cartItem) => cartItem.id !== itemToRemove.id);
        setCartData(updatedCartData);
        localStorage.setItem('cart', JSON.stringify(updatedCartData));
        dispatch({ type: 'REMOVE', id: itemToRemove.id });
    }



    // clear cart option, just for testing purpose
    const clearCart = () => {
        // Clear the cart data in local storage
        localStorage.removeItem('cart');
        dispatch({ type: "DROP" })
        setCartData([]);
    }

    const handleCheckout = async (totalAmount) => {
        let userEmail = localStorage.getItem('userEmail');
        const response = await fetch('http://127.0.0.1:8000/orderdata', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: userEmail, order_data: data, order_date: new Date().toDateString(), totalAmount: totalAmount })
        })

        if (response.status === 200) {
            clearCart();
            console.log('order placed successfully');
        }
    }

    return (
        <>
            <div className="cart-bg-image-tint"></div>
            <div className="cart-bg-image">
                <span>Cart</span>
            </div>
            {
                cartData.length !== 0 ?
                    <div className="cart-outer-width">
                        <div className="cart-main-page">
                            <div className="cart-items-and-total-details">
                                <div className="cart-items">
                                    <div className="cart-items-header">
                                        <div>ORDERED DISHES</div>
                                        <div>PRICE</div>
                                        <div>QUANTITY</div>
                                        <div>TOTAL</div>
                                        <div></div>
                                    </div>
                                    {cartData.map((item, index) => (
                                        <div className="cart-items-header" key={index}>
                                            <div>{item.name}</div>
                                            <div>{item.price}</div>
                                            <div>
                                                <button className='plusminus' onClick={() => decreaseQuantity(item)}> <span>-</span> </button> <span className='item-qty'>{item.quantity}</span>  <button className='plusminus' onClick={() => increaseQuantity(item)}><span>+</span></button></div> {/* Quantity */}
                                            <div>{item.quantity * item.price}</div> {/* Total for one item */}
                                            <div className='removeItem' onClick={() => removeItem(item)}><i className="fa-regular fa-trash-can"></i></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="center-line"></div>
                                <div className="cart-total">
                                    <p>Delivery Charges</p>
                                    <p>Free Delivery</p>
                                    <p>CALCULATE DELIVERY CHARGE</p>
                                    <p>SUBTOTAL <span className='subotal-amt'>$ {calculateSubtotal().toFixed(2)}</span></p>
                                    <p>TOTAL <span className='total-amt'>$ {calculateTotal().toFixed(2)}</span></p>
                                    <p className='checkout-btn' onClick={() => handleCheckout(calculateTotal().toFixed(2))}>PROCEED TO CHECKOUT</p>
                                    <p className='checkout-btn' onClick={clearCart}>Empty Cart</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div style={{ height: '65vh', width: '100%', fontSize: '45px', display: 'flex', justifyContent: 'center', backgroundColor: 'white', fontFamily: 'Poppins', alignItems: 'center' }}>No Items in cart</div>
            }

        </>
    )
}

export default Cart
