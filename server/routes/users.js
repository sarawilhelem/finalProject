import express from 'express';
import { getDetails} from '../controllers/users.js';

const usersRouter = express.Router();
usersRouter.use(express.json())

//usersRouter.get('/', getDetails);
usersRouter.post('/', getDetails);


export default usersRouter;