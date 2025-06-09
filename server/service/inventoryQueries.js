import con from '../../db/createConnection.js';

export async function queryGetItems(category) {

    let query = `SELECT * FROM inventory WHERE category = ?`;
    const [result] = await con.query(query, [category]);
    return result;
  }

