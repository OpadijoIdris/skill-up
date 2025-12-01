import mongoose, { Schema, model } from "mongoose";

const enrollmentSchema = new Schema({
    learner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    progress: {
        type: Number,
        default: 0
    },
    completedVideos: [
        {
            videoId: { type: mongoose.Schema.Types.ObjectId }
        }
    ],
    quizScores: [
        {
            quizId: { type: mongoose.Schema.Types.ObjectId },
            score: Number
        }
    ],
    assignmentSubmissions: [
        {
            assigmentId : { type: mongoose.Schema.Types.ObjectId },
            fileUrl: { type: String },
            grade: { type: Number },
            feedback: { type: String }
        }
    ],
    status: {
      type: String,
      enum: ["in-progress", "completed"],
      default: "in-progress",
    },

    certificateUrl: {
      type: String, 
    },
    
}, { timestamps: true });

const Enrollmennt = model("Course", enrollmentSchema);

export default Enrollmennt;