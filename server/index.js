import express from "express";
import mongoose from "mongoose";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import authRouter from "./routes/authRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit:'1mb' }));
app.use(bodyParser.json({limit:'1mb'}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



app.use(cors({
  origin: 'http://localhost:8081' // Izinkan hanya dari frontend Vue
}));



app.use(authRouter);
app.use(adminRouter);
app.use(userRouter);

const port = '3000';
const connection ='mongodb://localhost:27017/ruangbaca';
mongoose.connect(connection)
.then(() => app.listen(port))
  .then(console.log(__dirname))
  .then(console.log(`server start on port ${port}`))
  .catch((err) => console.log(err));
