import { Router } from "express";
import { createCourse, getAllCourse, getCourseById, updateCourse, addVideo, updateVideo } from "../controller/course.controller.js";
import { protect, admin, instructor } from "../middlewares/auth.js";

const router = Router();

router.post("/", protect, instructor, createCourse);
router.get("/", getAllCourse);
router.get("/:id", getCourseById);
router.put("/:id", protect, instructor, updateCourse);
router.put("/admin/:id", protect, admin, updateCourse);

// for the video
router.post("/:id", protect, instructor, addVideo);
router.put("/:id/video/:videoId", protect, instructor, updateVideo);

export default router;