import { queryGetItems } from '../service/pricesOueries.js';


export async function getItems(req, res) {
    try {

        const queryCategory = req.query.category;
        const items = await queryGetItems(queryCategory);
        res.status(200).json(items)
        return
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message });
        return
    }
}


