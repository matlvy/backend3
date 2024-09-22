import * as userController from "../controllers/user.controller.js";
import { Router } from "express";
const router = Router();

router.post("/generateData", userController.createUser);
router.get("/mockingusers", userController.getUsers);

export default router;
