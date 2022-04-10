 import React, { useEffect, useState } from 'react';
 import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import useProducts from '../../Hooks/UseProducts';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, Setproducts]=useProducts();
    const [cart, setcart]= useState([])   
    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart =[]
        for (const id in  storedCart){
           const addedProduct = products.find(product => product.id === id);
       if(addedProduct){
           const quantity =storedCart[id]
           addedProduct.quantity=quantity;
           savedCart.push(addedProduct);
       }
        }
        setcart(savedCart);
    },[products])

    const handleAddToCart =(selectetProduct)=>{
        let newCrat=[]
        const exists =cart.find(Product => Product.id ===selectetProduct.id)
        if(!exists){
            selectetProduct.Product=1;
            newCrat =[...cart,selectetProduct]
        }else{
            const rest =cart.filter(Product => Product.id === selectetProduct.id)
            exists.quantity= exists.quantity+1;
            newCrat=[...rest, exists];
            
        }

        setcart(newCrat);
        addToDb(selectetProduct.id);
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
            <Cart cart ={cart}>
            <Link to='/orders'>
                        <button>
                            Review Order
                        </button>
                    </Link>
            </Cart>
            </div>
            
        </div>
    );
};

export default Shop;