import dotenv from 'dotenv';
// Configuration pour l'accès aux variables d'environnement
dotenv.config();

import express from 'express';
import cors from 'cors';
import {errorHandler} from './middleware/errorHandler.js'
import connectDB from './config/database.js';

import authRoutes from './routes/authRoutes.js';

// Inialisons le serveur Express
const app = express();


// Connectons nous à la base de données MongoDB
connectDB();

// Middleware pour le CORS
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT","DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);


app.use(errorHandler);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: "Route not found",
        statusCode: 404
    });
});


// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});

// process.on('unhandledRejection', (err) => {
//     console.error(`Error: ${err.message}`);
//     process.exit(1)
// })