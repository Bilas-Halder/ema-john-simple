import React from 'react';
import fakeData from '../../fakeData';
import './Cart.css';

const Cart = (props) => {
    const ssKeys = Object.keys(sessionStorage);
    const index = ssKeys.indexOf("savefrom-helper-extension");
    if (index > -1) {
        ssKeys.splice(index, 1);
    }

    console.log('fake langth', fakeData.length);
    const cart = ssKeys.map(key => {
        console.log(key);
        const product = fakeData.find(product => product.key === key);
        product.quantity = parseInt(sessionStorage[key]);
        return product;
    });
    const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    const totalShippingCost = (cart.reduce((total, product) => total + product.shipping, 0)) * 85 / 100;

    const tax = totalPrice * 12 / 100;
    console.log(cart);

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

                <div className="order-btn-div">

                    <button onClick={() => props.handler(cart)} className='order-btn' >Place Order</button>
                </div>
            </div>

        </div>
    );
};

export default Cart;