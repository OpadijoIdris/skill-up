import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

export const register = async (name, email, password, phoneNumber, role, bio) => {
    try{
        if(!name || !email ||!password ||!phoneNumber){
            throw new Error ("All fields are required")
        };
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({
            name, 
            email,
            password: hashedPassword,
            phoneNumber,
            role,
            bio
        })
        await user.save();
        return user;

    }catch(error){
        console.log("Could not register user", error.message)
    }
}

export const login = async (email, password) => {
    try{
        const user = await User.findOne({email}).select("+password");
        if(!user){
            throw new Error ("you do not have an account, kindly register")
        };
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return {error: "Incorrect password"}
        };
        const token = jwt.sign({id: user._id, role: user.role}, 
                                process.env.JWT_SECRET, 
                                { expiresIn: "1hr" });
        return { user, token };

    }catch(error){
        console.log("Could not login", error.message)
    }
}