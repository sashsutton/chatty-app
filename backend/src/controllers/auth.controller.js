import User from '../models/User.model.js';
import {generateToken} from "../lib/utils.js";
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
    const {fullName, email, password} = req.body;
    try{
        if (password.length < 8){
            res.status(400).json({message: "Password must be at least 8 characters long."})
        }

        const user = await User.findOne({email});
        if (user){
            return res.status(400).json({message: "User already exists."});
        }

        const  salt  = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName: fullName,
            email: email,
            password: hashedPassword
        });

        if(newUser){
            generateToken(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePicture: newUser.profilePicture,
            });
        } else{
            res.status(401).json({
                message: "Invalid user data."
            });
        }

    } catch(error){
        console.error("Error in signup controller:", error.message);
        res.status(500).json({message: "Internal server error."});
    }
}




export const login = async (req, res) => {
    const {email, password} = req.body;
    try{
    } catch(error){

    }
}

export const logout = async (req, res) => {
    try{

    } catch(error){

    }
}

