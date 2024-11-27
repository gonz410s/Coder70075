import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';
import dotenv from 'dotenv';



// Cargar variables de entorno
dotenv.config();
console.log('MongoDB URI:', process.env.MONGO_URI); 
const app = express();
const PORT = process.env.PORT || 8080;

// Verificación de la URL de MongoDB
if (!process.env.MONGO_URI) {
    console.error("MongoDB URL no está definida!");
    process.exit(1); // Termina si no está definida
}

const mongoUrl = process.env.MONGO_URL;  
console.log('MongoDB URI:', mongoUrl);  

mongoose.set('strictQuery', false);
mongoose.connect(mongoUrl)
    .then(() => console.log('Conexión a MongoDB exitosa'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

app.use(express.json());
app.use(cookieParser());

// Rutas
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/mocks', mocksRouter);

// Iniciar servidor
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

export default app;
