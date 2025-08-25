import db from '../config/db.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const { fullName, user_name, pass_word } = req.body;

    console.log(req);

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

export const guard = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token missing' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(401).json({ message: 'Invalid or expired token' });
    }
}


export const users = async (req, res) => {
    try {
        const [users] = await db.query('SELECT * FROM master');
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}