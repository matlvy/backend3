import * as userController from "../controllers/user.controller.js";
import { Router } from "express";
const router = Router();

router.post("/generateData", userController.createUser);
router.get("/mockingusers", userController.getUsers);
router.get("/mockingusers/:id", userController.getUserById);
router.get("/mockingusers/pets", userController.getPets);
router.put("/:id", userController.updUser);
router.delete("/:id", userController.delUser);
router.delete("/", userController.delAllUsers);
export default router;
