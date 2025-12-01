import Category from "../model/categoryModel.js";

export const creatCategory = async (data) => {
    try{
        const { name } = data;

        const existing = await Category.findOne({ name })
        if(existing){
            throw new Error ("Category already Exists")
        }
        return Category.create(data)

    }catch(error){
        throw new Error ("Could not create")
    }
};

export const getAllCategory = async () => {
    return await Category.find().sort({ createdAt: -1 })
};

export const getCategoryById = async (id) => {
    const category = Category.findById(id);
    if(!category){
        throw new Error ("Category not found");
    };
    return category;
};


export const updateCategory = async (id, name, description) => {
    try{
        const update = await Category.findByIdAndUpdate(id, { name, description }, { new: true });
        if(!update){
            throw new Error ("Category not found")
        };
        return update;

    }catch(error){
        throw new Error ("Could not update category")
    }
};

export const deleteCategory = async (id) => {
    try{
        const deleted = await Category.findByIdAndDelete(id);
        if(!deleted){
            throw new Error ("Category not found")
        };
        return null;;

    }catch(error){
        throw new Error ("Something went wrong")
    }
}