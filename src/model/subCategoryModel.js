import mongoose, { Schema, model } from "mongoose";
import Category from "./categoryModel";

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
    Category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
}, { timestamps: true });

const subCategory = model("subCategory", subCategorySchema);

export default subCategory;