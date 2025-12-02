import { Router } from "express";
import { createSubCategory, getSubCategory, getAllSubs, updateSub, deleteSub } from "../controller/subcategory.controller.js";
import { protect, admin, instructor } from "../middlewares/auth.js";

const router = Router();

router.post("/", protect, admin, createSubCategory);
router.get("/", getAllSubs);
router.get("/:id", getSubCategory);
router.put("/:id", protect, admin, updateSub);
router.delete("/:id", protect, admin, deleteSub);

export default router;
