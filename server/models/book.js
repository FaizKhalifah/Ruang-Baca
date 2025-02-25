import { Schema } from "mongoose";
import mongoose from "mongoose";

const bookSchema = new Schema({
    title : {
        type:String,
        required:true
    },
    author : {
        type:String,
        required:true
    },
    publishedYear:{
        type:Number,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum: ['borrowed', 'free'], 
        default: 'free'
    },
    isbn:{
        type:String,
        unique:true,
        required:true
    },
    imagePath:{
        type:String,
        default:"/uploads/default.jpg"
    }
})

const Book = mongoose.model('Book',bookSchema);
export default Book;