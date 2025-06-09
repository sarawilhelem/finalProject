import mysql from 'mysql2/promise'; 
import dotenv from 'dotenv';
dotenv.config();

async function createConnection() {
    const host = process.env.DB_HOST
    const user = process.env.DB_USER
    const password = 'Toor22'
    const con = await mysql.createConnection({
        host: host,
        user: user,
        password: password
    });
    try {
        await con.query("CREATE DATABASE IF NOT EXISTS olamaadpasot");
        await con.changeUser({ database: 'olamaadpasot' });
        
    }
    catch (err) {
        console.error(err);
        throw err;
    }

    return con;
};
const con = await createConnection(); 
export default con;