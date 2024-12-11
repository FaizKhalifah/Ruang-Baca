import Book from "../../models/book.js";

async function getBookById(req,res) {
    try{
        const book = await Book.findById(req.params.id);
        if(!book){
            res.status(400).json({error:"Book not found"});
        }
        res.status(201).json(book);
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

async function getAllBooks(req,res) {
    try{
        const books = await Book.find();
        if(books.length==0){
            return res.status(201).json({msg:"Tidak ada buku di database"})
        }
        res.json(books);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

export default{
    getBookById, getAllBooks
}