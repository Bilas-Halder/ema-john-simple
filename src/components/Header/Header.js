import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = ({ setSearchText }) => {

    const inputFieldHandler = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <Link to={'/'}>Shop</Link>
                <Link to={'/order-review'}>Order Review</Link>
                <Link to={'/manage-inventory'}>Manage Inventory</Link>

            </nav>
            <div className="search-div">
                <input onChange={inputFieldHandler} type="text" placeholder="Search Your Desired Product Here"></input>

            </div>
        </div>
    );
};

export default Header;