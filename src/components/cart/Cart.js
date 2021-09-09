import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    return (
        <div>
            <h3>Order summary</h3>
            <h5>Item Ordered: {cart.length}</h5>
            <h5>Total price : {totalPrice}</h5>
        </div>
    );
};

export default Cart;