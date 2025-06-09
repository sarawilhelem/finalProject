import express from 'express';
import { getItems,updateItems} from '../controllers/shoppingCart.js';

const shoppingCartRouter = express.Router();
shoppingCartRouter.use(express.json())

shoppingCartRouter.get('/', getItems);
shoppingCartRouter.post('/', updateItems);


export default shoppingCartRouter;