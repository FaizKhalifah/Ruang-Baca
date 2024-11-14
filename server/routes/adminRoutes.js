import authMiddleware from "../Middleware/authMiddleware.js";
import adminBookRouter from "./admin/adminBookRoutes.js";
import adminJournalRouter from "./admin/adminJournalRoutes.js";
import { Router } from "express";

const adminRouter = Router();
adminRouter.use(adminBookRouter);
adminRouter.use(adminJournalRouter);

export default adminRouter;