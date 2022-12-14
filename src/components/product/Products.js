import React from 'react';
import './Products.css';
const Products = ({handleAddToCart,product}) => {    
    const {name,img,price,seller,ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />            
            <div className='product-info'>
            <p className='product-name'>{name}</p>
                <p>Price: $ {price}</p>
                <p><small>Seller: </small>{seller}</p>
                <p><small>Ratings: </small>{ratings}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'><p>Add to Cart</p></button>
        </div>
    );
};

export default Products;