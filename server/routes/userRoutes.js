import userBookRouter from "./user/userBookRoutes.js";
import userJournalRouter from "./user/userJournalRoutes.js";
import { Router } from "express";
const userRouter =Router();

userRouter.use(userBookRouter);
userRouter.use(userJournalRouter);
export default userRouter;