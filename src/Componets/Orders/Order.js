import React from 'react';

import useProducts from '../../Hooks/UseProducts';
import useCart from '../../Hooks/UseCart';
import Cart from '../Cart/Cart';
import "./Order.css"
import RevioItem from '../ReveioItem/RevioItem';
import "./Order.css"
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Order = () => {
    const [products, setproducts]=useProducts()
    const [cart, setcart] = useCart(products);
    const deleteBtn =product=>{
        const rest=cart.filter(pd=> pd.id !== product.id);
        setcart(rest)
        removeFromDb(product.id)
       
    }
    return (
        <div className="shop-container">
         <div className="item-revio"> 
         {
               cart.map(product=> <RevioItem key={product.id} product={product} deleteBtn={deleteBtn}></RevioItem>)
           }
             </div> 
            <div className="cart-container">
                <Cart cart={cart}>
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

export default Order;