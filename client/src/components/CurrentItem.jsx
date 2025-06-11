import { useState } from 'react';
import { useCart } from './tools/CartContext';
import Pay from './Pay';

export default function CurrentItem(props) {
    const [item, setItem] = useState(props.item);
    const [sizes, setSizes] = useState(props.sizes);
    const { addItemToCart } = useCart();
    const [selectedFile, setSelectedFile] = useState(null);
    const [beyondPayment, setBeyondPayment] = useState(false);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    return (
       <>
          <span>{item.title}</span>
          <img src={item.src} />
          {sizes.map((size, i) => (
              <span key={i}>{size}</span>
          ))}
          <div>
              <label>
                  העלה קובץ:
                  <input type="file" onChange={handleFileChange} />
              </label>
              {selectedFile && <div>קובץ שנבחר: {selectedFile.name}</div>}
          </div>
          <button onClick={() => addItemToCart(item)}>הוסף לעגלה</button>
          <button onClick={()=>{setBeyondPayment(true)}}>מעבר לתשלום</button>
          { beyondPayment && <Pay/>}
       </>
    );
}