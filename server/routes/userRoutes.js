import userBookRouter from "./user/userBookRoutes.js";
import { Router } from "express";
const userRouter =Router();

userRouter.use(userBookRouter);
export default userRouter;