import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
import { useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.int';
import { signOut } from 'firebase/auth';

const Header = ({orders,about,shop,inventory}) => {
    const [user] = useAuthState(auth)
    const handleSingOut =()=>{
        signOut(auth)
    }
    return (
        <nav className="Header">
         <img src={logo} alt=""/>
       <div>
       <Link to="shop">Shop</Link>
       <Link to="orders">Orders</Link>
       <Link to="inventory">Inventory</Link>
       <Link to="about">About</Link>
       </div>
       { user?
       <button onClick={handleSingOut} >SingOut</button>
       :
        <Link to="/login">Login</Link>
       }
       
        </nav>
    );
};

export default Header;