import mongoose from "mongoose";
import Book from "../../models/book.js";

mongoose.connect('mongodb://localhost:27017/ruangbaca');

async function clearBook() {
    try{
        await Book.deleteMany();
        console.log("All books cleared");
        mongoose.disconnect();
    }catch(err){
        console.log(err);
        mongoose.disconnect();
    }
}

clearBook();