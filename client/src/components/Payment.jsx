import React, { useEffect } from 'react';
import requests from './tools/requests';

const Payment = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID';
        script.async = true;
        script.onload = () => {
            window.paypal.Buttons({
                createOrder: function(data, actions) {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: '10.00' // סכום התשלום
                            }
                        }]
                    });
                },
                onApprove: async function(data, actions) {
                    const details = await actions.order.capture();
                    alert('תשלום בוצע בהצלחה: ' + details.id);

                    // שליחת פרטי התשלום לשרת שלך
                    try {
                        const paymentDetails = {
                            orderId: details.id,
                            amount: details.purchase_units[0].amount.value,
                        };
                        const response = await requests.post('payments', paymentDetails, 'POST');
                        console.log('Response from server:', response);
                    } catch (error) {
                        console.error('Error sending payment details to server:', error);
                    }
                }
            }).render('#paypal-button-container');
        };
        document.body.appendChild(script);
    }, []);

    return <div id="paypal-button-container"></div>;
};

export default Payment;
