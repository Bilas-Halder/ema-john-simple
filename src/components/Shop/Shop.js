import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = ({ searchText }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const loadSearchedData = (text) => {
        let searchedProducts = fakeData.filter(product => product.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
        setProducts(searchedProducts);
    };

    useEffect(() => {
        if (searchText === "") {
            const first10 = fakeData.slice(0, 10);
            setProducts(first10);
            return;
        }

        loadSearchedData(searchText);


    }, [searchText])

    const handleAddProduct = (product) => {
        // setting localStorage with quantity

        if (product.stock <= product.quantity) {
            return undefined;
        }

        const keys = Object.keys(localStorage);
        const keyExist = keys.find(key => key === product.key);
        if (keyExist) {
            localStorage.setItem(keyExist, parseInt(localStorage.getItem(keyExist)) + 1);
            product.quantity++;
            let newCart = cart.filter(pd => pd.key !== keyExist);
            newCart = [...newCart, product];
            setCart(newCart);
        }
        else {
            localStorage.setItem(product.key, 1);
            product.quantity = 1;
            const newCart = [...cart, product];
            setCart(newCart);
        }
    };

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.key} product={product} handler={handleAddProduct}></Product>)
                }

                {
                    !searchText && <div className="load-more-div">
                        <button className="load-more-btn">
                            Load More
                        </button>
                    </div>
                }

            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;