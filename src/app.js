import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';


import dotenv from 'dotenv';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 8080;


const mongoUrl = process.env.MONGO_URI;  


if (!mongoUrl) {
    console.error("MongoDB URI no está definida en las variables de entorno!");
    process.exit(1); 
}

// Conectar a MongoDB Atlas
mongoose.set('strictQuery', false);
mongoose.connect(mongoUrl)
    .then(() => console.log('Conexión a MongoDB Atlas exitosa'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));


app.use(express.json());
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/mocks', mocksRouter);

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

export default app;
