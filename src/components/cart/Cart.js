import React from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import './Cart.css';

const Cart = (props) => {
    const lsKeys = Object.keys(localStorage);
    const index = lsKeys.indexOf("savefrom-helper-extension");
    if (index > -1) {
        lsKeys.splice(index, 1);
    }

    const cart = lsKeys.map(key => {
        const product = fakeData.find(product => product.key === key);
        product.quantity = parseInt(localStorage[key]);
        return product;
    });
    const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    const totalShippingCost = (cart.reduce((total, product) => total + (product.shipping * product.quantity), 0)) * 85 / 100;

    const tax = totalPrice * 12 / 100;

    return (
        <div className='cart'>
            <div className='cart-header'>
                <h3>Order summary</h3>
                <p>Item Ordered: {cart.length}</p>
            </div>
            <div>
                <table>
                    <tr>
                        <td>Items : </td>
                        <td className='price-td'>$ {totalPrice.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping {'&'} Handling : </td>
                        <td className='price-td'>$ {totalShippingCost.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Total Before Tax : </td>
                        <td className='price-td'>$ {(totalPrice + totalShippingCost).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax : </td>
                        <td className='price-td'>$ {tax.toFixed(2)}</td>
                    </tr>
                    <tr className='order-total'>
                        <td style={{ borderTop: '2px solid lightgray' }}>Order Total : </td>
                        <td style={{ borderTop: '2px solid lightgray' }} className='price-td'>$ {(totalPrice + totalShippingCost + tax).toFixed(2)}</td>
                    </tr>
                </table>

                {
                    props.forReview ?
                        <Link to="/order-placed">
                            <div className="order-btn-div">
                                <button className='order-btn' >Place Order</button>
                            </div>
                        </Link>
                        :
                        <Link to="/order-review">
                            <div className="order-btn-div">
                                <button className='order-btn' >Review Cart</button>
                            </div>
                        </Link>
                }
            </div>

        </div>
    );
};

export default Cart;