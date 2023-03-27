import React, { useEffect, useState } from 'react';
import ShopCard from '../ShopCard/ShopCard';
import "./Shop.css"
const Shop = () => {
    const [products,setProduct] = useState([])
    const [cart,setCart] = useState([])
    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    const handleAddToCart = (props) =>{
        const newCart = [...cart, props]
        setCart(newCart)
      }
    return (
        <>
            <div className='shop-container px-5'>
            <div className="product-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
            {
                products.map(product => <ShopCard
                     product={product}
                      key={product.id}
                      handleAddToCart={handleAddToCart}
                      ></ShopCard>)
            }
            </div>
            <div className="cart-container pt-5">
                <h3 className='font-semibold text-center text-xl'>Order Summary</h3>
                <p className='pl-3 pt-8'>Selected Items : {cart.length}</p>
                <p className='pl-3 pt-8'>Total Price :$<span id='total-price'>00</span></p>
                <p className='pl-3 pt-8'>Total Shoping Charge :$<span>5</span></p>
                <p className='pl-3 pt-8'>Tax :$<span>114</span></p>
                <h3 className='font-semibold text-center text-xl pt-5'>Grand Total : $<span id='total'>00</span></h3>
            </div>
            </div>
        </>
    );
};

export default Shop;