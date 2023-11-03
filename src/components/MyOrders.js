import React, { useState, useEffect } from 'react'
import '../styles/MyOrders.css'

export default function MyOrders() {

    const [myOrders, setMyOrders] = useState(null);

    const fetchMyOrders = async () => {
        await fetch('http://127.0.0.1:8000/myorders', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json();
            await setMyOrders(response)
        });

    }

    useEffect(() => {
        fetchMyOrders();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="myorders_headline">
                <div className="myorders_tint"></div>
                <span>My Orders</span>
            </div>

            <div className="myorders_main">
                {
                    myOrders ? (
                        myOrders.ordered_data.map((order) => {
                            return (<>
                                <div className="myorders_content">
                                    <div className="myorders_date">Order Date: {order[0].order_date}</div>
                                    <div className="myorders_data">
                                        {order.slice(2).map((item) => {
                                            return (
                                                <>
                                                    <div className="myorders_name">Name: {item.name}</div>
                                                    <div className="myorders_qty">Qty: {item.quantity}</div>
                                                    <div className="myorders_price">Price: $ {item.price}</div>
                                                </>
                                            )

                                        })}
                                        {
                                            order.slice(1, 2).map((item) => {
                                                return (
                                                    <div className="myorders_total">Total: {item.totalAmount ? "$" + item.totalAmount : "NA"}</div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </>
                            )

                        })

                    )
                        : <div style={{ fontFamily: 'Poppins', fontSize: '45px', textAlign: 'center', fontWeight: '100' }}>No Orders Placed yet</div>
                }
            </div >
        </>
    )
}