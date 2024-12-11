import Router from "express";
import authMiddleware from "../../Middleware/authMiddleware.js";
import userBookController from "../../controllers/user/userBookController.js";

const userBookRouter = Router();

userBookRouter.get('/books',authMiddleware.verifyToken,authMiddleware.isUser,userBookController.getAllBooks);
userBookRouter.get('/books/:id',authMiddleware.verifyToken,authMiddleware.isUser,userBookController.getBookById);

export default userBookRouter;