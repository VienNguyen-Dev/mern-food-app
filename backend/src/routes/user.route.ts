import express from "express";
import UserController from "../controllers/user.controller";
import { jwtCheck, jwtParse } from "../midleware/auth";

const router = express.Router();

router.post("/createUser", jwtCheck, UserController.createCurrentUser);
router.put("/updateUser", jwtCheck, jwtParse, UserController.updateCurrentUser);

export default router;
