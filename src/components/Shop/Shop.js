import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // setting sessionStorage with quantity
        const keys = Object.keys(sessionStorage);
        const keyExist = keys.find(key => key === product.key);
        if (keyExist) {
            sessionStorage.setItem(keyExist, parseInt(sessionStorage.getItem(keyExist)) + 1);
            product.quantity++;
            let newCart = cart.filter(pd => pd.key !== keyExist);
            newCart = [...newCart, product];
            setCart(newCart);
        }
        else {
            sessionStorage.setItem(product.key, 1);
            product.quantity = 1;
            const newCart = [...cart, product];
            setCart(newCart);
        }
    };

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product product={product} handler={handleAddProduct}></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;