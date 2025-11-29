import * as userServices from "../services/user.services.js";

export const getAllUsers = async (req, res) => {
    try{
        const user = await userServices.getAllUsers();
        if(!user){
            return res.status(400).json({message: "Could not get all users"})
        }
        res.status(200).json(user);

    }catch(error){
        return res.status(500).json({message: error.message})
    }
};

export const getUserById = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await userServices.getUserById(id);
        if(!user){
            return res.status(404).json({message: "User does not exist"})
        }
        res.status(200).json(user);

    }catch(error){
        return res.status(500).json({message: error.message})
    }
};

export const updateUser = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, email, phoneNumber, bio } = req.body;

        const user = await userServices.updateUser(id, name, email, phoneNumber, bio);
        if(!user){
            return res.status(400).json({message: "Could not update your details"})
        }
        res.status(200).json(user);

    }catch(error){
        return res.status(500).json({message: error.message})
    }
};

export const deleteUser = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await userServices.deleteUser(id);
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        res.status(200).json({success: true, message: "successfully deleted"})

    }catch(error){
        return res.status(500).json({message: error.message})
    }
};

export const deleteAllUser = async (req, res) => {
    try{
        const user = await userServices.deleteAllUser();
        if(!user){
            res.status(400).json({message: "Could not delete all user"})
        }
        res.status(200).json({success: true, message: "Successfully deleted all users"})

    }catch(error){
        return res.status(500).json({message: error.message})
    }
};