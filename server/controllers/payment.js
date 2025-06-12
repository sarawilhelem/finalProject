import {processPayment} from'../service/payment.js';

export async function createPayment(req, res) {
    try {
        const paymentData = req.body; // נתוני התשלום מהלקוח
        const paymentResult = await processPayment(paymentData);
        res.status(200).json(paymentResult);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
        return;
    }
}
