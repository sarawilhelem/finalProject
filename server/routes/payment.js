import express from 'express';
import { createPayment } from '../controllers/payment.js';
const payPalRouter = express.Router();

payPalRouter.use(express.json())



payPalRouter.post('/api/payments',createPayment);

export default payPalRouter;

