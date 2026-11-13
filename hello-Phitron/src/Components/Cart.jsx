import React from 'react';
import Product_card from './product_card';

const Cart = ({cart,setCart}) => {
    return (
        <div className='cart'>
            <h2 className='cart-title'>Cart</h2>
            <div>
                {
                    cart.map((product ,ind) => {
                        return <Product_card product={product} key={ind} cart={cart} setCart={setCart} />
                    })
                }
            </div>
        </div>
    );
};

export default Cart;