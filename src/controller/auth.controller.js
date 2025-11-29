import * as authServices from "../services/auth.services.js";

export const register = async (req, res) => {
    try{
        const { name, email, password, phoneNumber, role, bio } = req.body;
        const user = await authServices.register(name, email, password, phoneNumber, role, bio);
        if(!user){
            res.status(400).json({message: "Could not register"})
        }
        res.status(201).json(user);

    }catch(error){
        res.status(500).json({message: error.message})
    }
};

export const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await authServices.login(email, password);
        if(!user){
            res.status(400).json({message: "could not login"})
        }
        res.status(200).json(user)

    }catch(error){
        res.status(500).json({message: error.message})
    }
}