import mongoose, { Schema, model } from "mongoose";

const subCategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
}, { timestamps: true });

const SubCategory = model("subCategory", subCategorySchema);

export default SubCategory;