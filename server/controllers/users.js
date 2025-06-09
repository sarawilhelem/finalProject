import { queryCheckUser, queryAddUser } from '../service/usersOueries.js';
import bcrypt from 'bcrypt';

export async function getDetails(req, res) {
    try {
        const details = req.body;
        let user = await queryCheckUser(details.email);
        //const hashedPassword = await bcrypt.hash(details.password, 10); 
        if (user.length==0) {
            await queryAddUser(details.email, details.password);
            res.status(201).json({ message: 'User added successfully' });
        } else {
          //  if (!await bcrypt.compare(details.password, user.password)) {
            if( details.password!=user[0].password){
                res.status(401).json({ error: 'Wrong email or password' });
            } else {
                res.status(200).json({ message: 'Login successful' });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}
