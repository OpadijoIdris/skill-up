import { Schema, model } from "mongoose";
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true, 
        trim: true,
        select: false
    },
    phoneNumber: {
        type: String,
        required: true, 
        unique: true, 
        trim: true
    },
    role: {
        type: String,
        enum: ["learner", "instructor", "admin"],
        default: "learner"
    },
    bio: {
        type: String,
        default: ""
    },
    skill: [
        {
            type: String,
        }
    ]

}, { timestamps: true});

const User = model("User", userSchema);

export default User;