import jwt from "jsonwebtoken";

async function verifyToken(req,res,next) {
    const token = req.header('Authorization').replace('Bearer ', '');
    if(!token){
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try{
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded;
        next();
    }catch(err){
        return res.status(401).json({msg:"Token is not valid"})
    }
}

async function isAdmin(req,res,next) {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'Access denied' });
      }
    next();
}

async function isUser(req,res,next) {
    if (req.user.role !== 'user') {
        return res.status(403).json({ msg: 'Access denied' });
      }
      next();
}

export default{
    verifyToken,isAdmin,isUser
}