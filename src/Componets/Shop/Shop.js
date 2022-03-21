 import React, { useEffect, useState } from 'react';
 import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products, Setproducts]=useState([]);
    const [cart, setcart]= useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(response => response.json())
        .then(data=>Setproducts(data))
    },[products]);

    const handleAddToCart =(product)=>{
        console.log(product);
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
                <h4>Order Summary</h4>
                <p>Selectet Item:{cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;