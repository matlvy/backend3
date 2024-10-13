import * as userController from "../controllers/user.controller.js";
import { Router } from "express";
const router = Router();

router.post("/generateData", userController.createUsers);
router.get("/mockingusers", userController.getUsers);
router.get("/mockingusers/pets", userController.getPets);
router.get("/mockingusers/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.delete("/", userController.deleteAllUsers);
export default router;
