import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subCategory",
        required: true,
    },

    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    thumbnail: {
        type: String
    },

    videos: [
        {
            title: { type: String, required: true },
            url: { type: String, required: true },
            duration: { type: Number, min: 1 }
        }
    ],

    lessons: [
        {
            title: {
                type: String,
                required: true
        },
            content: { type: String }
        }
    ],

    quizzes: [
        {
            question: { type: String},
            options: [{ type: String }],
            correctAnswer: {type: String}
        }
    ],

    assignments: [
        {
            title: { type: String },
            instructions: { type: String },
            dueDate: { type: Date }
        }
    ],

    price: {
        type: Number,
        default: 0
    },

    level: {
        type: String,
        enum: ["Beginner", "intermediate", "Advanced"],
        default: "Beginner"
    },

    status: {
        type: String,
        enum: ["draft", "pending", "published"],
        default: "pending",
    },

    rating: {
        type: Number,
        default: 0
    }

}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema);

export default Course;