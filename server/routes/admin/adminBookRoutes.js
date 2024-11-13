import Router from "express";
import authMiddleware from "../../Middleware/authMiddleware.js";
import adminBookController from "../../controllers/admin/adminBookController.js";

const adminBookRouter = Router();

adminBookRouter.post('/admin/books/add', authMiddleware.verifyToken,authMiddleware.isAdmin,
    adminBookController.addBook)

adminBookRouter.get('/admin/books',authMiddleware.verifyToken,authMiddleware.isAdmin,
    adminBookController.getAllBooks);

    
export default adminBookRouter;