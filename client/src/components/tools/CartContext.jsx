import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);


    useEffect( () => {
        const postCart = async () => {
            await requests.post('shoppingCart', cartItems, 'POST');
        };
        postCart();
    }, [cartItems]);

    const addItemToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeItemFromCart = (itemToRemove) => {
        setCartItems((prevItems) => prevItems.filter(item => item !== itemToRemove));
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, setCartItems, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
