import express from 'express';
import { getItems} from '../controllers/inventory.js';

const inventoryRouter = express.Router();
inventoryRouter.use(express.json())

inventoryRouter.get('/', getItems);


export default inventoryRouter;