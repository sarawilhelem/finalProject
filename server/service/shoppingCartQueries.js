import con from '../../db/createConnection.js';

export async function queryGetItems(email) {

    let query = `SELECT * FROM shoppingcart WHERE email = ?`;
    const [result] = await con.query(query, [email]);
    return result;
  }


  export async function queryDeleteItems(email) {

    let query = `DELETE FROM shoppingcart WHERE email = ?`;
    const [result] = await con.query(query, [email]);
    return result;
  }

export async function queryPostItems(cart) {
    let query = `INSERT INTO shoppingcart (email, item_id, size, price, amount) VALUES (?, ?, ?, ?, ?)`;
    for (const item of cart) {
        const params = [item.email, item.item_id, item.size, item.price, item.amount];
        await con.query(query, params);
    }
    return;
}