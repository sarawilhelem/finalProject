import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export  function CartProvider({children}) {

    const [cartItems, setCartItems] = useState(async() => {
        const currentUser=JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser)
        currentUser?
        await requests.get(`shoppingCart/?email=${currentUser}`)
         : [];
    });


    useEffect(async() => {
        await requests.post('shoppingCart',cartItems, 'POST')
    }, [cartItems]);

    const addItemToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeItemFromCart = (itemToRemove) => {
        setCartItems((prevItems) => prevItems.filter(item => item !== itemToRemove));
    };
    
    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
