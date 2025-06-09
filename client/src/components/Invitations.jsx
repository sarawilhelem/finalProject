import { useState } from 'react';
import { useEffect } from 'react';
import requests from './tools/requests';
import CurrentItem from './CurrentItem';

export default function Invitations() {
    const [invitationsData, setInvitationsData] = useState([])
    const [error, setError] = useState(null)
    const [currentItem, setCurrentItem] = useState({ isActive: false, bencher: null });
    //const [invitationsizes, setInvitationsizes] = useState([])
    let invitationsizes;
    useEffect(() => {
        const fetchData = async () => {
            try {

                const invitations = await requests.get(`invitations/?category=furniture`);
                 invitationsizes = await requests.get(`prices/?category=furniture`);
                 setInvitationsData(invitations);

                // setInvitationsizes(invitationsize);
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
                    <img src={item.src}   onClick={() => { setCurrentItem(true, item) }} />
                    <span>{item.title}</span>
                </div>
            ))}

{/* {CurrentItem.isActive && <CurrentItem item={CurrentItem} />} */}

            {currentItem.isActive && <CurrentItem item={currentItem} sizes={invitationsizes} />}
        </>
    )
}
