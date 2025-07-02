import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;
export const connectDB = async () => {
    try{
        const conn= await mongoose.connect(uri);
        console.log("Connected to MongoDB: ", conn.connection.host);
    } catch(error){
        console.error("Error connecting to MongoDB:", error.message);
    }
}