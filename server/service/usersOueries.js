import con from '../../db/createConnection.js';

export async function queryCheckUser(email) {

    let query = `SELECT * FROM users WHERE email = ?`;
    const [result] = await con.query(query, [email]);
    return result;
  }


  // export async function queryAddUser(email,password) {

  //   let query = `INSERT INTO users (email,password)  VALUES (?,?)`;
  //    await con.query(query, [email,password]);
  //   return;
  // }
  export async function queryAddUser(email, password) {
    let query = `INSERT INTO users (email, password) VALUES (?, ?)`;
    try {
        await con.query(query, [email, password]);
    } catch (error) {
        console.error('Error inserting user:', error);
        throw error; // או טיפול בשגיאה אחר
    }
    return;
}