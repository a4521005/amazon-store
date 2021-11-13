import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import{Link} from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import{useStateValue} from './StateProvider';
import{auth} from './firebase';



function Header(){
    const [{basket,loggedinuser},dispatch]=useStateValue();
    // console.log("my basket",basket)=>測試是否能順利加入購物車
    const logoutUser=()=>{
        if(loggedinuser){
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            <img className="header-logo" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            <div className="header-search">
                <input type="text" className="header-searchinput" />
                <SearchIcon className="header-searchIcon"/>
            </div>
            <div className="header-nav">
            {/*1st link*/}
                <Link to={!loggedinuser && "/login"} className="header-link">
                    <div onClick={logoutUser} className="header-option">
                        <span className="header-optionLineOne">Hello,{loggedinuser?.email}</span>
                        <span className="header-optionLineTwo">{loggedinuser ? 'Signout' : 'Sign In'}</span>
                    </div>
                </Link>
            {/*2st link*/}
                <Link to="/" className="header-link">
                    <div className="header-option">
                        <span className="header-optionLineOne">Returns</span>
                        <span className="header-optionLineTwo"> & Orders</span>
                    </div>
                </Link>
            {/*3st link*/}
                {/* <Link to="/" className="header-link">
                    <div className="header-option">
                        <span className="header-optionLineOne">You</span>
                        <span className="header-optionLineTwo"> Prime</span>
                    </div>
                </Link> */}
            {/*basket icon with number*/}
                <Link to="/checkout" className="header-link">
                    <div className="header-optionBasket">
                        <ShoppingBasketIcon/>
            {/*number of items in the basket*/}
                        <span className="header-optionLineTwo header-productCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}
export default Header;