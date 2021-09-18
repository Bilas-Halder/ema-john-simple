import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, faTrashAlt, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import './Product.css';


const Product = (props) => {
    const { name, img, seller, price, stock, star, key, features, quantity } = props.product;
    const forReview = props.forReview;

    const starArray = [];
    const noStarArray = [];
    for (let i = 0; i < star || i < 5 - star; i++) {
        if (i < star) starArray.push('s');
        if (i < 5 - star) noStarArray.push('s');
    }
    const addToCartBtn = () => {
        return (
            <button className='cart-btn' onClick={() => props.handler(props.product)}>
                <FontAwesomeIcon className='shopping-cart' icon={faShoppingCart} /> Add to Cart
            </button>
        );
    };
    const removeFromCartBtn = () => {
        return (
            <button className='cart-btn' onClick={() => props.handler(props.product)}>
                <FontAwesomeIcon className='fa-trash-alt' icon={faTrashAlt} /> Remove
            </button>
        );
    };

    const productDetailsRightSide = () => {
        return (
            <div className="product-details-right">
                <div className='stars'>
                    {
                        starArray.map(() => <FontAwesomeIcon className='shopping-cart' icon={faStar} />)
                    }
                    <div className="no-star">
                        {
                            noStarArray.map(() => <FontAwesomeIcon className='shopping-cart' icon={faStar} />)
                        }
                    </div>
                </div>
                <div className="features">
                    {features.length > 0 ? <h3>Features</h3> : <div></div>}
                    <small>
                        <p>
                            <ul>
                                {
                                    features.map(feature => <li>{feature.description} : {feature.value}</li>)
                                }
                            </ul>
                        </p>
                    </small>
                </div>
            </div>
        );
    };

    const shippingOptionsRightSide = () => {
        return (
            <div>
                <form className="shippingOptions" action="">

                    <input type="radio" id="8-10" name="shipping" value="free"></input>
                    <label for="html">8-10 business days</label><br />
                    <small>$0 - Free Shipping</small><br />

                    <input type="radio" id="5-7" name="shipping" value="3.99" checked ></input>
                    <label for="css">5-7 business days</label><br />
                    <small>$3.99 - Regular Shipping</small><br />

                    <input type="radio" id="2-4" name="shipping" value="7.99"></input>
                    <label for="css">2-4 business days</label><br />
                    <small>$3.99 - Standard Shipping</small><br />

                </form>
            </div>
        );
    }
    const getQuantities = () => {
        return (
            <div className="quantity-div">
                Quantity : <div className="quantity-meter">
                    <button onClick={() => props.quantityHandler.plusQuantity(props.product)} className="add"> <FontAwesomeIcon className='fa-plus' icon={faPlus} /> </button>

                    <span className="quantity"> {quantity} </span>

                    <button onClick={() => props.quantityHandler.minusQuantity(props.product)} className="remove"> <FontAwesomeIcon className='fa-minus' icon={faMinus} /> </button>
                </div>
            </div>
        );
    };


    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div style={{ paddingLeft: '30px' }}>
                <h4 className='product-name'>{name}</h4>

                <div className='product-details'>
                    <div className='product-details-left'>
                        {!forReview && <p>by : {seller}</p>}
                        <h4 className='fw-normal'>$ {price}</h4>
                        {forReview && getQuantities()}
                        <p><small>Only {stock} left in stock - order soon</small></p>
                        {!forReview ? addToCartBtn() : removeFromCartBtn()}

                    </div>
                    {!forReview ? productDetailsRightSide() : shippingOptionsRightSide()}

                </div>

            </div>

        </div>
    );
};

export default Product;