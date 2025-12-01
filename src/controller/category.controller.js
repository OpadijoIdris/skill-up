import * as categoryServices from "../services/category.services.js";

export const createCategory = async (req, res) => {
    try{
        const category = await categoryServices.creatCategory(req.body);
        if(!category){
            return res.status(400).json({message: "Could not create category"})
        }
        res.status(201).json(category)

    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const getAllCategory = async (req, res) => {
    try{
        const category = await categoryServices.getAllCategory();
        if(!category){
            return res.status(400).json({message: "There is no existing category"})
        };
        res.status(200).json(category)

    }catch(error){
        res.status(500).json({message: error.message})
    }
};

export const getCategoryById = async (req, res) => {
    try{
        const { id } = req.params;
        const category = await categoryServices.getCategoryById(id);
        if(!category){
            return res.status(400).json({message: "Category does not exist"})
        }
        res.status(200).json(category)

    }catch(error){
        return res.status(500).json({message: error.message})
    }
};

export const updateCategory = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, description } = req.body
        const category = await categoryServices.updateCategory(id, name, description);

        if(!category){
            return res.status(400).json({message: "Unable to update"})
        }
        res.status(200).json(category)

    }catch(error){
        return res.status(500).json({message: error.message})
    }
};

export const deleteCategory = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await categoryServices.deleteCategory(id);
        if(!deleted){
            return res.status(404).json({message: "Category not found"})
        };
        res.status(200).json({success: true, message: "Category successfully deleted"})

    }catch(error){
        return res.status(500).json({message: error.message})
    }
}