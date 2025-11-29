import User from "../model/userModel.js";
import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
    }
    if(!token){
        return res.status(401).json({message: "Not authorized, no token"})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password")
        
        if(!req.user){
            res.status(401).json({message: "Could not find user"})
        }
        next();

    }catch(error){
        console.log("Token verification failed", error)
        return res.status(401).json({message: "Not authorized, Token failed"})
    }
}

export const admin = async (req, res, next) => {
    if(req.user && req.user.role ==="admin"){
        next();
    }else{
        return res.status(401).json({message: "Not authorized, not an admin"})
    }
}

export const instructor = async (req, res, next) => {
    if(req.user && req.user.role ==="instructor"){
        next()
    }else{
        return res.status(401).json({message: "Not authorized, not an instructor"})
    }
};