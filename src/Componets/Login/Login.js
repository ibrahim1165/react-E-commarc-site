import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.int';
import './Login.css'

const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigation = useNavigate()
    const location = useLocation()
    const from = location.state?.form?.patname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      //email login//

    const handleEmailBlure =e =>{
        setemail(e.target.value)
    }
    //password login//

    const handlePasswordBlure =e =>{
        setpassword(e.target.value)
    }
    //login//
    if(user){
        navigation(from,{replace: true});
    }

    const handleuserSingin =e =>{
     e.preventDefault();
     signInWithEmailAndPassword(email,password)

    }
    return (
        <div className="from-container">
            <div>
                <h3 className="from-title"> Login</h3>
                <form onSubmit={handleuserSingin}>
                    <div className="input-group">
                        <lebel htmlFor="email"> Enail</lebel>
                        <input onBlur={handleEmailBlure} type="email" Name="email" required />
                    </div>
                    <div className="input-group">
                        <lebel htmlFor="password"> Password</lebel>
                        <input onBlur={handlePasswordBlure } type="Password"  required />
                    </div>
                    <input className="from-submit" type="submit" value="Login" required/>
                    <p style={{color:"red"}}>{error?.message}</p>
            {
                loading && <p>Loading...</p>
            }
                </form>
                <p>
                    New to Ema-jhon? <Link  to="/singup" className="btn-link" >Create New Account</Link>
                </p>
            </div>
           
        </div>
    );
};

export default Login;