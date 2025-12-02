import * as SubCategoryServices from "../services/subCategory.services.js";

export const createSubCategory = async (req, res) => {
    try{
        const data = req.body
        const sub = await SubCategoryServices.createSubCategory(data);
        if(!sub){
            return res.status(400).json({ message: "Could not create" })
        }
        res.status(201).json(sub)

    }catch(error){
        return res.status(500).json({ message: error.message })
    }
};

export const getSubCategory = async (req, res) => {
    try{
        const { id } = req.params;
        const sub = await SubCategoryServices.getSubCategory(id);
        if(!sub){
            return res.status(404).json({ message: "Could not find this sub category" })
        }
        res.status(200).json(sub)

    }catch(error){
        return res.status(500).json({ message: error.message })
    }
}

export const getAllSubs = async (req, res) => {
    try{
        const sub = await SubCategoryServices.getAllSubs();
        if(!sub){
            return res.status(400).json({ message: "Could not get all subs" })
        }
        res.status(200).json(sub)

    }catch(error){
        return res.staus(500).json({ message: error.message })
    }
};

export const updateSub = async (req, res) => {
    try{
        const { id } = req.params;
        const data = req.body;
        const sub = await SubCategoryServices.updateSub(id, data);
        if(!sub){
            return res.status(400).json({ message: "Could not update" })
        }
        res.status(200).json(sub)

    }catch(error){
        return res.status(500).json({ message: error.message })
    }
};

export const deleteSub = async (req, res) => {
    try{
        const { id } = req.params;
        const sub = await SubCategoryServices.deleteSub(id);
        if(!sub){
            return res.status(404).json({ message: "Sub category not found/ does not exist" })
        }
        res.status(200).json({ success: "true", message: "Sub category succesfully deleted" })

    }catch(error){
        return res.status(500).json({ message: error.message })
    }
};