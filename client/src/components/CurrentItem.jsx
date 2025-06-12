import { useState, useEffect } from 'react';
import { useCart } from './tools/CartContext';
import PayPalButton from './Payment';
import { useLocation } from 'react-router-dom';

export default function CurrentItem() {
    const location = useLocation();
    const [item, setItem] = useState({ paper: '', size: '', quantity: 1, title: '', src: '', price: 0 });
    const { addItemToCart } = useCart();
    const [selectedFile, setSelectedFile] = useState(null);
    const [beyondPayment, setBeyondPayment] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        if (location.state) {
            setItem(prevItem => ({
                ...prevItem,
                paper: location.state.item.type,
                src: location.state.item.src,
                title: location.state.item.title,
            }));
            setPrices(location.state.prices); // Assumes prices is an array of objects
        }
    }, [location.state]);

    useEffect(() => {
        const calculatedPrice = calculateTotalPrice();
        setTotalPrice(calculatedPrice);
        setItem(prevItem => ({
            ...prevItem,
            price: calculatedPrice,
        }));
    }, [quantity, prices]);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const calculateTotalPrice = () => {
        if (prices && prices.length > 0) {
            const pricePerItem = prices[0].price; // Assuming prices[0] has the price
            return pricePerItem * quantity;
        }
        return 0;
    };

    return (
        <>
            {item && (
                <div>
                    <span>{item.title}</span>
                    <img src={item.src} alt={item.title} />

                    {prices.map((priceItem, i) => (
                        <div key={i}>
                            <span>{priceItem.size}</span>
                        </div>
                    ))}
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
