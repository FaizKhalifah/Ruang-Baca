import authMiddleware from "../Middleware/authMiddleware.js";
import { Router } from "express";

const adminRouter = Router();
adminRouter.get('/admin/dashboard',authMiddleware.verifyToken,(req,res)=>{
    res.json({mssg:"welcome to admin dashboard"})
})

export default adminRouter;