import express from 'express';
import cors from 'cors'


const app = express();


import { signup, login } from './controllers/authController.js';
import { guard, users, getUserData, addPassword } from './controllers/userController.js';


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

app.get('/getuser', guard, getUserData);

app.post('/add', guard, addPassword)

app.get("/users", users);
