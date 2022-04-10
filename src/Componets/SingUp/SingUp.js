import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Singup.css"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.int'

const SingUp = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [Confirm ,setconfirm] = useState('')
    const [error,seterror] = useState('')
    const navigation = useNavigate()
    const [createUserWithEmailAndPassword ,hokerror,user]=  useCreateUserWithEmailAndPassword(auth);
    //email set //
    const handleEmailBlure =e=>{
        setemail(e.target.value);
    };
    //password set //
    const handlePasswordBlure =e=>{
        setpassword(e.target.value);
    };
    //conference password set//
    const handleConfromPassword =e =>{
        setconfirm(e.target.value);
    };
    if(user){
        navigation('/shop')
    }
    const handleCreateSunmit =e =>{
        e.preventDefault();

        if(password !== Confirm){
            seterror("Your two password did not match")
            return;
        }
        if(password.length <6){
            seterror("password must 6 character or longer")
            return;
        }
        createUserWithEmailAndPassword(email, password);
        // .then(result=>{
        //     const user = result.user;
        //     console.log(user);
        // })
    }



    return (
        <div>
            <div className="from-container">
            <div>
                <h3 className="from-title"> Sing Up</h3>
                <form onSubmit={handleCreateSunmit} >
                    <div className="input-group">
                        <lebel htmlFor="email"> Enail</lebel>
                        <input onBlur={handleEmailBlure} type="email" Name="email" required />
                    </div>
                    <div className="input-group">
                        <lebel htmlFor="password"> Password</lebel>
                        <input onBlur={handlePasswordBlure} type="Password" required />
                    </div>
                    <div className="input-group">
                        <lebel htmlFor="Confirm-password">Confirm Password</lebel>
                        <input onBlur={ handleConfromPassword} type="Password"required />
                    </div>
                    <p style={{color:"red"}}>
                        {error}
                    </p>
                    <p style={{color:"red"}}>
                        {hokerror}
                    </p>
                    <input className="from-submit" type="submit" value="Sing Up" required />
                </form>
                <p>
                 Already Have Account? <Link  to="/login" className="btn-link" >Login</Link>
                </p>
            </div>
        </div>
        </div>
    );
};

export default SingUp;