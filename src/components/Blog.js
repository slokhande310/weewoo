import React from 'react'
import '../styles/Blog.css'
import food_delivery_blog from '../images/food-delivery-blog.png'

function Blog() {
    return (
        <>
            <div className="blog-container">
                <div className="blog-food-delivery-content">
                    <div className="bfdc-image">
                        <img src={food_delivery_blog} alt="food-delivery-blog" />
                    </div>
                    <div className="bfdc-info">
                        <h2>Fastest Delivery</h2>
                        <p>We pride ourselves on being the fastest delivery app because we've fine-tuned every aspect of our service. From our optimized logistics to our dedicated team, we ensure your orders reach you swiftly. Experience the quickest, most efficient delivery with us, your trusted delivery partner.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
