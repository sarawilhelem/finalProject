import { useState } from 'react';
import { useEffect } from 'react';
import requests from './tools/requests';
import { Link } from 'react-router-dom'; 
import { useParams } from 'react-router-dom';



export default function DisplayItems() {
    const [itemsData, setItemsData] = useState([])
    const [error, setError] = useState(null)
    const [prices, setPrices] = useState([])
    const { category } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {

                const items = await requests.get(`inventory/?category=${category}`);
                const prices = await requests.get(`prices/?category=${category}`);
                
                setItemsData(items);

               setPrices(prices);
            }
            catch (error) {
                setError(error)
            }
        }
        fetchData();
    }, [category]);

    return (
        <>
{console.log(category)}
            {itemsData && itemsData.map((item, i) => (
                <div key={i}>
                    <Link to={`/${category}/current/${item.id}`} state={{item,prices}}>
                        <img src={item.src} />
                    </Link>
                    <span>{item.title}</span>
                </div>
            ))}
            {error && <div>שגיאה: {error.message}</div>}

        </>
    )
}
