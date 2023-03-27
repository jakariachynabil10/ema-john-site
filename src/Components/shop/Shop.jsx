import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
            <div>
                <Cart cart={cart}></Cart>
            </div>
            </div>
        </>
    );
};

export default Shop;