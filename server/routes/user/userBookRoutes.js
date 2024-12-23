import Router from "express";
import authMiddleware from "../../Middleware/authMiddleware.js";
import userBookController from "../../controllers/user/userBookController.js";

const userBookRouter = Router();

userBookRouter.get('/books',authMiddleware.verifyToken,authMiddleware.isUser,userBookController.getAllBooks);
userBookRouter.get('/books/loanHistory',authMiddleware.verifyToken,authMiddleware.isUser,userBookController.getLoanHistory);
userBookRouter.get('/books/:id',authMiddleware.verifyToken,authMiddleware.isUser,userBookController.getBookById);
userBookRouter.post('/books/borrow',authMiddleware.verifyToken,authMiddleware.isUser,userBookController.loanBook);
userBookRouter.post('/books/return',authMiddleware.verifyToken,authMiddleware.isUser,userBookController.returnBook);

export default userBookRouter;