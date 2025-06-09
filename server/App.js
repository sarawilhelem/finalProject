import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import inventoryRouter from './routes/inventory.js';
import pricesRouter from './routes/prices.js';
import usersRouter from './routes/users.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json()); 

app.use('/invitations', inventoryRouter);
app.use('/prices', pricesRouter);
app.use('/users',usersRouter);
app.use('/shoppingCart',shoppingCartRouter)
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000`);

});

