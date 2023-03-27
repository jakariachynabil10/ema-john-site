import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const {cart} = props
    let total = 0
    let totalShipping = 0
    for (const product of cart) {
        total = total + product.price
        totalShipping = totalShipping + product.shipping
    }
    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax
    return (
        <>
          <div className='cart-container py-5 px-3 rounded-lg'>
          <h3 className='font-semibold text-center text-xl '>Order Summary</h3>
                <p className='pl-3 pt-8'>Selected Items : {cart.length}</p>
                <p className='pl-3 pt-8'>Total Price :${total}</p>
                <p className='pl-3 pt-8'>Total Shoping Charge :${totalShipping}</p>
                <p className='pl-3 pt-8'>Tax :${tax.toFixed(0)}</p>
                <h3 className='font-semibold text-center text-xl pt-5'>Grand Total : ${grandTotal.toFixed(0)}</h3>  
          </div>
        </>
    );
};

export default Cart;