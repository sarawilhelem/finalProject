import { useState } from 'react';
import { useEffect } from 'react';
import requests from './tools/requests';
import CurrentItem from './CurrentItem';
import { Link } from 'react-router-dom'; // Import Link


export default function Invitations() {
    const [invitationsData, setInvitationsData] = useState([])
    const [error, setError] = useState(null)
    const [prices, setPrices] = useState([])
   // let invitationPrices;
    useEffect(() => {
        const fetchData = async () => {
            try {

                const invitations = await requests.get(`inventory/?category=invitations`);
                const prices = await requests.get(`prices/?category=invitations`);
                
                setInvitationsData(invitations);

               setPrices(prices);
            }
            catch (error) {
                setError(error)
            }
        }
        fetchData();
    }, []);

    return (
        <>

            {invitationsData && invitationsData.map((item, i) => (
                <div key={i}>
                    <Link to={`/currentItem/${item.id}`} state={{item,prices}}>
                        <img src={item.src} />
                    </Link>
                    <span>{item.title}</span>
                </div>
            ))}
            {error && <div>שגיאה: {error.message}</div>}

        </>
    )
}
