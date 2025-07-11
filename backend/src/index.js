import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

import {connectDB} from './lib/db.js';


dotenv.config();
const uri = process.env.MONGODB_URI;
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("api/message", messageRoutes);


app.listen(process.env.PORT, () => {
    console.log("Server is running on port", port);
    connectDB();
});


