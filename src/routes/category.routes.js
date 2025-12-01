import { Router } from "express";
import { createCategory, getAllCategory, getCategoryById, updateCategory, deleteCategory } from "../controller/category.controller.js";
import { protect, admin, instructor } from "../middlewares/auth.js";

const router = Router();

router.post("/", protect, admin, createCategory);
router.get("/", getAllCategory);
router.get("/:id", getCategoryById);
router.put("/:id", protect, admin, updateCategory);
router.delete("/:id", protect, admin, deleteCategory);

export default router;