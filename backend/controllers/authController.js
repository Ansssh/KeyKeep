import db from '../config/db.js';
import bcryptjs from 'bcryptjs';

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
        res.status(201).json({ message: 'User created successfully', user: user_name });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
