import React, { useState } from 'react';
import './Login.css';
import{Link, useHistory} from 'react-router-dom';
import{auth} from './firebase';


function Login(){
    const history = useHistory();
    const[userEmail,setuserEmail]=useState('')
    const[userPassword,setuserPassword]=useState('')

    const loggedinuser = event =>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(userEmail,userPassword)
        .then((auth)=>{
            history.push('/')
        })
        .catch(e=>alert(e.message))
    }

    const signupuser = event =>{
        event.preventDefault()
        auth.createUserWithEmailAndPassword(userEmail,userPassword)
        .then((auth)=>{
            history.push('/')
        })
        .catch(e=>alert(e.message))
    }

    return(
        <div className="login">
            <Link>
                <img className="login-logo" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"></img>
            </Link>
            <div className="login-container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={userEmail} onChange={event=>setuserEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={userPassword} onChange={event=>setuserPassword(event.target.value)} type="password"/>
                    <button onClick={loggedinuser} type="submit" className="login-signInButton">Sign In</button>
                </form>
                <p>By Signing-In, you agree to Amazon's Terms and Conditions.</p>
                <button onClick={signupuser} className="login-registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
