import React, { createContext, useContext, useEffect, useState } from 'react';
import requests from './requests';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [hasUpdated, setHasUpdated] = useState(false); 

    useEffect(() => {
        const postCart = async () => {
            if (hasUpdated) { 
                await requests.post('shoppingCart', cartItems, 'POST');
            }
        };

        postCart();
    }, [cartItems, hasUpdated]);

    const addItemToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
        setHasUpdated(true); 
    };

    const removeItemFromCart = (itemToRemove) => {
        setCartItems((prevItems) => prevItems.filter(item => item !== itemToRemove));
        setHasUpdated(true); 
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, setCartItems, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
