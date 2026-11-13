import React, { useState } from 'react';

const Product_card = ({product ,cart,setCart}) => {

    const handleCart = ()=> {
        setCart([...cart, product])
    }
    return (
        <div className="product-card">
            <div className="image-container">
                <img src={product.image} alt={product.title} className="product-image" />
            </div>
            
            <div className="product-details">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.title}</h3>
                
                {/* Limits description to 80 characters so cards stay uniform */}
                <p className="product-description">
                    {product.description.substring(0, 80)}...
                </p>
                
                <div className="product-meta">
                    <span className="product-price">${product.price}</span>
                    <span className="product-rating">
                        ⭐ {product.rating.rate} <span className="review-count">({product.rating.count})</span>
                    </span>
                </div>
            </div>
            
            <button className="add-to-cart-btn" onClick={handleCart}>Add to Cart</button>
        </div>
    );
};

export default Product_card;