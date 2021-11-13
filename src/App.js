import React from 'react';
import {useEffect} from 'react';
import './App.css';
import Header from './Header.js';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Footer from './Footer.js';
import Navlinks from './Navlinks.js';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import {FormatBoldRounded} from '@material-ui/icons';

function App() {
  const [{loggedinuser}, dispatch]=useStateValue()
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userauth)=>{
      if(userauth){
        dispatch({
          type:'SET_LOGIN',
          user:userauth
        })
      }else{
        dispatch({
          type:'SET_LOGIN',
          user:null
        })
      }
    })
    return ()=>{
      unsubscribe()
    }
  },[])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>

          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Navlinks/>
            <Home/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
