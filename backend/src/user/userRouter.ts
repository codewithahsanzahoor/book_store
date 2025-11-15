import express from "express";
import { userCreate, userLogin, userProfile, getAllUsers, userLogout } from "./userController";
import { authenticate } from "../middlewares/authentication";
import { admin } from "../middlewares/admin";
const userRouter = express.Router();

userRouter.get("/", authenticate, admin, getAllUsers);

userRouter.post("/register", userCreate);

userRouter.post("/login", userLogin);

userRouter.get("/profile", authenticate, userProfile);

userRouter.post("/logout", userLogout);

export default userRouter;
