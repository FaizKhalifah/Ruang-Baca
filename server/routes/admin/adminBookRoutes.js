import Router from "express";
import authMiddleware from "../../Middleware/authMiddleware.js";
import adminBookController from "../../controllers/admin/adminBookController.js";

const adminBookRouter = Router();

adminBookRouter.post('/admin/books/add', adminBookController.addBook)

export default adminBookRouter;