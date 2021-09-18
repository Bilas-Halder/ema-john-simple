import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import '../Shop/Shop.css';

const OrderReview = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };
    const handleCart = (cartItems) => {
        console.log('cartItems');
    };

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product forReview product={product} handler={handleAddProduct}></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart} handler={handleCart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;