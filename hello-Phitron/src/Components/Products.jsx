import React, { useEffect, useState } from 'react';
import Product_card from './product_card';
import Cart from './Cart';

const Products = () => {
    const [products,setProduct] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [cart,setCart] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(data=>{
                setProduct(data)
                setIsLoading(false)
            })
    },[])

    // console.log(products)
    return (
        <div className='parentofparent'>
            <div className='products-parent'>
            <h2 className='title'>All Products</h2>
            <Cart cart={cart} setCart={setCart} />
            <div>
                {
                    products.map((product ,ind) => {
                        return <Product_card product={product} key={ind} cart={cart} setCart={setCart} />
                    })
                }
            </div>
        </div>
        </div>
    );
};

export default Products;