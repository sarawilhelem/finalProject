import { useState, useEffect } from 'react';
import { useCart } from '../tools/CartContext';
import PayPalButton from '../Payment';
import { useLocation } from 'react-router-dom';

export default function CurrentInvitation() {
    const location = useLocation();
    const [item, setItem] = useState({ paper: '', size: '', quantity: 100, title: '', src: null, price: 0 });
    const { addItemToCart } = useCart();
    const [selectedFile, setSelectedFile] = useState(null);
    const [beyondPayment, setBeyondPayment] = useState(false);
    const [quantity, setQuantity] = useState(100);
    const [totalPrice, setTotalPrice] = useState(0);
    const [prices, setPrices] = useState([]);
    const [selectedSize, setSelectedSize] = useState(''); 
    const [selectedType, setSelectedType] = useState('');
    useEffect(() => {
        if (location.state) {
            setItem(prevItem => ({
                ...prevItem,
                paper: location.state.item.type,
                src: location.state.item.src,
                title: location.state.item.title,
            }));
            setPrices(location.state.prices);
        }
    }, [location.state]);

    useEffect(() => {
        const calculatedPrice = calculateTotalPrice();
        setTotalPrice(calculatedPrice);
        setItem(prevItem => ({
            ...prevItem,
            price: calculatedPrice,
        }));
    }, [quantity, prices, selectedSize]); 
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const calculateTotalPrice = () => {
        if (prices && prices.length > 0 && selectedSize) {
            const priceItem = prices.find(priceItem => priceItem.size === selectedSize); 
            if (priceItem) {
                return priceItem.price * quantity; 
            }
        }
        return 0;
    };

    return (
        <>
            {item && (
                <div>
                    <span>{item.title}</span>
                    <img src={item.src} alt={item.title} />

                    <div>
                        <label>בחר סוג דף:</label>
                        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                            <option value="">בחר סוג</option>
                            {prices&&prices.map((priceItem, index) => (
                                <option key={index} value={priceItem.type}>{priceItem.type}</option> // הוספת סוגי הנייר מתוך הטבלה
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>בחר גודל:</label>
                        {prices.map((priceItem, i) => (
                            <div key={i}>
                                <input
                                    type="radio"
                                    value={priceItem.size}
                                    checked={selectedSize === priceItem.size}
                                    
                                    onChange={() => setSelectedSize(priceItem.size)} // Update selected size
                                />
                                <span>{priceItem.size}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div>
                <label>
                    כמות:
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        min="1"
                    />
                </label>

                <div>מחיר: {totalPrice}</div>

            </div>

            <div>
                <label>
                    העלה קובץ:
                    <input type="file" onChange={handleFileChange} />
                </label>
                {selectedFile && <div>קובץ שנבחר: {selectedFile.name}</div>}
            </div>
            <button onClick={() => addItemToCart(item)}>הוסף לעגלה</button>
            <button onClick={() => { setBeyondPayment(true) }}>מעבר לתשלום</button>
            {beyondPayment && <PayPalButton />}
        </>
    );
}
