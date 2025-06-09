import express from 'express';
import { getItems} from '../controllers/prices.js';

const pricesRouter = express.Router();
pricesRouter.use(express.json())

pricesRouter.get('/', getItems);


export default pricesRouter;