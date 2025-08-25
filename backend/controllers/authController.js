import db from '../config/db.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const { fullName, user_name, pass_word } = req.body;


    try {
        const hashedPassword = await bcryptjs.hash(pass_word, 10);
        const [existingUser] = await db.query(
            'SELECT * FROM master WHERE username = ?',
            [user_name]
        );
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        
        const [result] = await db.query(
            'INSERT INTO master (name, username, password) VALUES (?, ?, ?)',
            [fullName, user_name, hashedPassword]
        );

        const [result2] = await db.query(`CREATE TABLE ${user_name} (id INT AUTO_INCREMENT PRIMARY KEY, service_name VARCHAR(255), service_username VARCHAR(255), service_password VARCHAR(255), notes VARCHAR(255) DEFAULT NULL)`);

        
        const token = jwt.sign({user: user_name}, process.env.SECRET_KEY, { expiresIn: '1h' }); 
        res.status(201).json({ message: 'User created successfully', user: user_name, token });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const login = async (req, res) => {
    const { user_name, pass_word } = req.body;

    try {
        const [user] = await db.query(
            'SELECT * FROM master WHERE username = ?',
            [user_name]
        );

        if (user.length === 0) {
            return res.status(404).json({ message: 'User not found!' });
        }

        const isPasswordValid = await bcryptjs.compare(pass_word, user[0].password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ user: user_name }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', user: user[0].username, token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
}