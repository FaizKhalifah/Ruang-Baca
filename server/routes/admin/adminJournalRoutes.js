import Router from "express";
import adminJournalController from "../../controllers/admin/adminJournalController.js";
import authMiddleware from "../../Middleware/authMiddleware.js";
const adminJournalRouter = new Router();


adminJournalRouter.get('/admin/journals',authMiddleware.verifyToken,
    authMiddleware.isAdmin,adminJournalController.getAllJournals);

adminJournalRouter.get('/admin/journal/:id',authMiddleware.verifyToken,authMiddleware.isAdmin,
    adminJournalController.getJournalById
);

adminJournalRouter.post('/admin/journal/add',authMiddleware.verifyToken,authMiddleware.isAdmin,
    adminJournalController.addJournal
);

adminJournalRouter.put('/admin/journal/update/:id',authMiddleware.verifyToken,authMiddleware.isAdmin,
    adminJournalController.updateJournal
);

export default adminJournalRouter;