
import React from 'react';
import { useCart } from './tools/CartContext';

const ShoppingCart = () => {
    const { cartItems, removeItemFromCart } = useCart();


    
    return (
        <div>
            <h2>עגלת קניות</h2>
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