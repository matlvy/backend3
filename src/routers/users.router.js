import * as userController from "../controllers/user.controller.js";
import { Router } from "express";
const router = Router();

router.post("/", userController.createUsers);
router.get("/", userController.getUsers);
router.get("/:id/pets", userController.getPets);
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.delete("/", userController.deleteAllUsers);
export default router;
