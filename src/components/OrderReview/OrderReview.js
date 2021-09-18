import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import '../Shop/Shop.css';

const OrderReview = () => {
    const [cart, setCart] = useState([]);

    const getLocalStorage = () => {
        const lsKeys = Object.keys(localStorage);
        const index = lsKeys.indexOf("savefrom-helper-extension");
        if (index > -1) {
            lsKeys.splice(index, 1);
        }

        const newCart = lsKeys.map(key => {
            const product = fakeData.find(product => product.key === key);
            product.quantity = parseInt(localStorage[key]);
            return product;
        });
        return newCart;
    };

    useEffect(() => {
        const newCart = getLocalStorage();
        setCart(newCart);
    }, []);



    const handleRemoveProduct = (product) => {
        // removing localStorage with quantity
        product.quantity = 0;
        localStorage.removeItem(product.key);

        const newCart = getLocalStorage();
        setCart(newCart);
    };

    const plusQuantity = product => {
        if (product.stock > product.quantity) {
            const key = product.key;
            localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
            product.quantity++;
            let newCart = cart.filter(pd => pd.key !== key);
            newCart = [...newCart, product];
            setCart(newCart);
        }
    };
    const minusQuantity = product => {
        if (product.quantity > 1) {
            const key = product.key;
            localStorage.setItem(key, parseInt(localStorage.getItem(key)) - 1);
            product.quantity--;
            let newCart = cart.filter(pd => pd.key !== key);
            newCart = [...newCart, product];
            setCart(newCart);
        }
    };

    const quantityHandler = {
        plusQuantity: plusQuantity,
        minusQuantity: minusQuantity
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product => <Product forReview product={product} handler={handleRemoveProduct} quantityHandler={quantityHandler}></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart forReview></Cart>
            </div>
        </div>
    );
};

export default OrderReview;