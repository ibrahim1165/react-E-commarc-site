 import React, { useEffect, useState } from 'react';
 import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, Setproducts]=useState([]);
    const [cart, setcart]= useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(response => response.json())
        .then(data=>Setproducts(data))
    },[products]);

    const handleAddToCart =(product)=>{
        const newCrat =[...cart,product]

        setcart(newCrat)
    }
    return (
        <div className="shop-container">
            <div className="products-container">
        {
            products.map( product => <Product key={product.id}
            product ={product}
            handleAddToCart={handleAddToCart}
            ></Product>)
        }
            </div> 
            <div className="cart-container">
            <Cart cart ={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;