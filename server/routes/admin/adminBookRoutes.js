import Router from "express";
import authMiddleware from "../../Middleware/authMiddleware.js";
import adminBookController from "../../controllers/admin/adminBookController.js";

const adminBookRouter = Router();


adminBookRouter.get('/admin/books',authMiddleware.verifyToken,authMiddleware.isAdmin,
    adminBookController.getAllBooks);

adminBookRouter.get('/admin/books/:id',authMiddleware.verifyToken,authMiddleware.isAdmin,
    adminBookController.getBookById
)

adminBookRouter.post('/admin/books/add', authMiddleware.verifyToken,authMiddleware.isAdmin,
        adminBookController.addBook);

adminBookRouter.put('/admin/books/update/:id', authMiddleware.verifyToken, authMiddleware.isAdmin,
            adminBookController.updateBook);

adminBookRouter.delete('/admin/books/delete/:id',authMiddleware.verifyToken,authMiddleware.isAdmin,
        adminBookController.deleteBook
);

export default adminBookRouter;