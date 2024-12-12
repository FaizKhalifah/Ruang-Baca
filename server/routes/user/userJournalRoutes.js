import Router from "express";
import authMiddleware from "../../Middleware/authMiddleware.js";
import userJournalController from "../../controllers/user/userJournalController.js"

const userJournalRouter = Router();

userJournalRouter.get('/journals',authMiddleware.verifyToken,authMiddleware.isUser,userJournalController.getAllJournals)
userJournalRouter.get('/journals/:id',authMiddleware.verifyToken,authMiddleware.isUser,userJournalController.getJournalById);

export default userJournalRouter;