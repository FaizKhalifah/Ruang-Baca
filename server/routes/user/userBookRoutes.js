import Router from "express";
import authMiddleware from "../../Middleware/authMiddleware.js";
import userBookController from "../../controllers/user/userBookController.js";

const userBookRouter = Router();

userBookRouter.get('/books',authMiddleware.verifyToken,authMiddleware.isUser,userBookController.getAllBooks);
userBookRouter.get('/books/:id',authMiddleware.verifyToken,authMiddleware.isUser,userBookController.getBookById);
userBookRouter.get('/books/borrow',authMiddleware.verifyToken,authMiddleware.isUser,userBookController.loanBook);
userBookRouter.get('/books/return',authMiddleware.verifyToken,authMiddleware.isUser,userBookController.returnBook);
export default userBookRouter;