import express from 'express';
import cors from 'cors'


const app = express();


import { signup, login, users } from './controllers/authController.js';


app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to the Password Manager API!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.post('/signup', signup);
app.post('/login', login);

app.get("/users", users);
