import { useState } from 'react';
import { useCart } from './tools/CartContext';


export default function CurrentItem(props) {
    const [item, setItem] = useState(props.item);
    const [sizes, setSizes] = useState(props.sizes);
    const { addItemToCart } = useCart();

    
    return (
       <>
      <span>{item.title}</span>
       <img src={item.src}  />
       { sizes.map(( size, i) => (
                <span key={i}>{size}</span>
            ))}
       </>
    )
}
