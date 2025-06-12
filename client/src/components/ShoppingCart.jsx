
import React from 'react';
import { useCart } from './tools/CartContext';
import requests from './tools/requests';


const ShoppingCart = () => {
    const { cartItems, removeItemFromCart } = useCart();

    const getUpdatedCart = async () => {
        const email = localStorage.getItem("currentUser");
        if(email)
            await requests.post('shoppingCart/getUpdateCart', email, 'POST');
        
    }


    
    return (
        <div>
            <h2>עגלת קניות</h2>
            <button onClick={getUpdatedCart}>ביצוע רכישה</button>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item} 
                        <button onClick={() => removeItemFromCart(item)}>הסר</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;