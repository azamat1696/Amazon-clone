import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import  './Login.css';
import {auth} from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const signIn = e => {
        e.preventDefault()
        //some firebase login
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    };

    const register = e => { 
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
             
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

        // do some firebase register 
    }

    return (
        <div className="login">
            <Link to='/'>
             <img className="login__logo"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"/>
             </Link>
             <div   className="login__container">
                 <h1>Sign-in</h1>
                 <form>
                     <h5>E-mail</h5>
                     <input type="email" value={email} onChange={e => setEmail(e.target.value) }/>

                     <h5>Password</h5>
                     <input type="password" value={password} onChange={ e => setPassword(e.target.value)}/>

                     <button onClick={signIn
                     } type="submit"    className="login__signInButton">Sign In</button>

                 </form>
                 <p>
                 By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                 </p>
                 <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
             </div>
        </div>

    )
}

export default Login
