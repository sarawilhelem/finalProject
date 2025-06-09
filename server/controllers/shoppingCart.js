import { queryGetItems,queryDeleteItems,queryPostItems } from '../service/shoppingCartQueries.js';


export async function getItems(req, res) {
    try {

        const email = req.query.email;
        const items = await queryGetItems(email);
        res.status(200).json(items)
        return
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message });
        return
    }
}


export async function updateItems(req, res) {
    try {

        const email = req.query[0][0];
        await queryDeleteItems(email);
await queryPostItems(req.query);
        res.status(200).json(items)
        return
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message });
        return
    }
}