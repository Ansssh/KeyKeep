import jwt from 'jsonwebtoken'
import db from "../config/db.js"

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

export const getUserData = async (req, res) => {
    const username = req.user.user;

    try {
        console.log(username)
        const [rows] = await db.query(`SELECT * FROM ${username}`)

        if (rows.length === 0){
            return res.status(201).json({data : "No Passwords Stored yet"});
        }

        res.status(200).json({rows})

    } catch (err) {
        console.error("Error: ", err)
        res.status(500).json({error: err})
    }
}

export const addPassword = async (req, res) => {
    const {name, username, password, notes, me} = req.body;

    try {
        await db.query(`INSERT INTO ${me} (service_name, service_username, service_password, notes) VALUES (?, ?, ?, ?)`, [name, username, password, notes])
        res.status(200).json({message: "Password Added Successfully"});

    } catch (e) {
        console.error(e);
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

