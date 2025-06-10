import express from 'express';
import { getItems,updateItems} from '../controllers/shoppingCart.js';

const shoppingCartRouter = express.Router();
shoppingCartRouter.use(express.json())

shoppingCartRouter.post('/', updateItems);
shoppingCartRouter.post('/getUpdateCart',getItems);


export default shoppingCartRouter;