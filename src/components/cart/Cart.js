import React from 'react';
import Products from '../product/Products';
import './Cart.css';

const Cart = ({cart}) => {
    let total=0;    
    let shipping=0;
    let quantity=0; 
    for (const carts of cart) {
        quantity=quantity+carts.quantity;
        total=total+carts.price* carts.quantity;
        shipping=shipping+carts.shipping;
    }
    const tax=parseFloat((total*0.1).toFixed(2));
    const grandTotal=parseFloat(total+shipping+tax).toFixed(2);    
    return (
        <div className='cart'>
          <h4>Order Summary</h4> 
          <p>Selected Items: {quantity}</p>
          <p>Total price: ${total}</p> 
          <p>Total Shipping Charge: ${shipping} </p>
          <p>tax: ${tax}</p>
          <h4>Grand Total: ${grandTotal} </h4>
        </div>
    );
};

export default Cart;