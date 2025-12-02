import SubCategory from "../model/subCategoryModel.js";

export const createSubCategory = async (data) => {
    const sub = await SubCategory.create(data);
    return sub;
};

export const getSubCategory = async (id) => {
    try{
        const sub = await SubCategory.findById(id);
        return sub

    }catch(error){
        throw new Error ("Could not get SubCategory")
    }
};

export const getAllSubs = async () => {
    try{
        const sub = await SubCategory.find().sort({ createdAt: -1 })
        return sub;

    }catch(error){
        throw new Error ("Could not get all subs")
    }
};

export const updateSub = async (id, data) => {
    try{
        const sub = await SubCategory.findByIdAndUpdate(id, data, { new: true });
        return sub;

    }catch(error){
        throw new Error("Could not update")
    }
};

export const deleteSub = async (id) => {
    try{
        const sub = await SubCategory.findByIdAndDelete(id);
        return sub;

    }catch(error){
        throw new Error ("Could not delete")
    }
};