import adminJournalController from "../../controllers/admin/adminJournalController.js";
import Router from "express";
import authMiddleware from "../../Middleware/authMiddleware.js";
const adminJournalRouter = new Router();


adminJournalRouter.get('/admin/journals',authMiddleware.verifyToken,
    authMiddleware.isAdmin,adminJournalController.getAllJournals);

export default adminJournalRouter;