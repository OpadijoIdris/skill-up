import { Router } from "express";
import { getAllUsers, getUserById, updateUser, deleteUser, deleteAllUser } from "../controller/user.controller.js";
import { protect, admin, instructor } from "../middlewares/auth.js";

const router = Router();

router.get("/", protect, getAllUsers);
router.get("/:id", protect, getUserById);
router.put("/:id", protect, updateUser);
router.delete("/all", protect, admin, deleteAllUser);
router.delete("/:id", protect, deleteUser);

export default router;