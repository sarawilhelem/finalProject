import con from './createConnection.js';

async function createTables() {
  try {
    console.log("Connected!");
    const sqlCreateInventory = "CREATE TABLE IF NOT EXISTS  inventory (id int AUTO_INCREMENT,category VARCHAR(20), title VARCHAR(50),src TEXT, PRIMARY KEY(id));";
    const sqlInsertInventory = "INSERT INTO inventory (category, title, src) VALUES ('invitations', 'הזמנה', 'https://res.cloudinary.com/dzzurotit/image/upload/v1749718941/%D7%97%D7%99%D7%99%D7%9D_%D7%A1%D7%91%D7%92_1_puimln.jpg'), ('invitations', 'Laptop', '../../../db/images/01-01.jpg'), ('furniture', 'Sofa', 'https://example.com/sofa.jpg'), ('furniture', 'Dining Table', 'https://example.com/dining-table.jpg');";
    
    await con.query(sqlCreateInventory)
    await con.query(sqlInsertInventory)
    console.log("inventory table created");
    const sqlCreatePrices = "CREATE TABLE IF NOT EXISTS prices (category VARCHAR(20) REFERENCES inventory(category), size VARCHAR(10), price FLOAT, PRIMARY KEY(category, size));"
    const sqlInsertPrices = "INSERT INTO prices (category, size, price) VALUES ('invitations', '10*10', 699), ('invitations', '10*20', 999), ('furniture', '20*30', 499), ('furniture','5*5', 799);";
    await con.query(sqlCreatePrices)
    await con.query(sqlInsertPrices)
    console.log("prices table created");

    // const sqlCreateUsers="CREATE TABLE IF NOT EXISTS users (email VARCHAR(50), password VARCHAR(10), PRIMARY KEY(email));"
    // const sqlInsertUsers = "INSERT INTO prices (category, size, price) VALUES ('electronics', '10*10', 699), ('electronics', '10*20', 999), ('furniture', '20*30', 499), ('furniture','5*5', 799);";
    // await con.query(sqlCreateUsers)
    // await con.query(sqlInsertUsers)
    // console.log("users table created");
    const sqlCreateUsers = "CREATE TABLE IF NOT EXISTS users (email VARCHAR(20) , password VARCHAR(15), PRIMARY KEY(email));";
    const sqlCreateShoppingCart = "CREATE TABLE IF NOT EXISTS shoppingCart (email VARCHAR(20)  REFERENCES users(email), item_id INTEGER, size VARCHAR(10), price FLOAT, amount INTEGER, PRIMARY KEY(email, item_id));";

    await con.query(sqlCreateUsers);
    await con.query(sqlCreateShoppingCart);
    console.log("users and shoppingCart tables created");

  }

  catch (err) {
    console.log(err)
  }
  finally {
    con.end()
  }
};

createTables();