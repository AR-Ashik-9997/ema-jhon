import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import Products from "../product/Products";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCart = getStoredCart();
    const saveCart=[];
    for (const id in storedCart) {
      const adedProduct=products.find(product=>product.id===id);
      if(adedProduct){
        adedProduct.quantity=storedCart[id];
        saveCart.push(adedProduct);
      }
      
    }
    setCarts(saveCart);
  }, [products]);
  const handleAddToCart = (product) => {
    let newCart=[];
    const exists=carts.find(selectedProduct=>selectedProduct.id===product.id);
    if(!exists){
      product.quantity=1;
      newCart = [...carts, product];
    }
    else{
      const rest=carts.filter(selectedProduct=>selectedProduct.id!==product.id);
      exists.quantity=exists.quantity+1;
      newCart = [...rest, exists];
    }
   
    setCarts(newCart);
    addToDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Products
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Products>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={carts}></Cart>
      </div>
    </div>
  );
};

export default Shop;
