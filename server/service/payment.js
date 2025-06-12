import axios from 'axios';

export async function processPayment(paymentData) {
    // כאן תבצע קריאה ל-PayPal API עם הנתונים הנדרשים
    const response = await axios.post('https://api.paypal.com/v1/payments/payment', paymentData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_ACCESS_TOKEN`
        }
    });
    return response.data;
}
