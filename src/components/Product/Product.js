import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    console.log(name, img);
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h5 className='product-name'>{name}</h5>
                <p><small>by : {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button className='cart-btn' onClick={() => props.handler(props.product)}>
                    <FontAwesomeIcon className='shopping-cart' icon={faShoppingCart} />
                    Add to Cart
                </button>
            </div>

        </div>
    );
};

export default Product;