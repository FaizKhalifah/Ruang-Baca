import Book from "../../models/book.js";

async function getBookById(req,res) {
    try{
        const book = await Book.findById(req.params.id);
        if(!book){
            res.status(400).json({error:"Book not found"});
            res.json(book);
        }
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

async function addBook(req,res) {
    try{
        const {title,author,publishedYear,publisher,isbn} = req.body;
        let book = await Book.findOne({isbn});
        if(book){
            return res.status(400).json({msg:"buku sudah ada di database"});
        }
        book = new Book({
            title,author,publishedYear,publisher,isbn
        })
        await book.save();
        res.status(201).json({msg:"Buku berhasil disimpan"});
    }catch(err){
        res.status(400).json({error : err.message})
    }
}

async function updateBook(req, res) {
    try {
        // Menggunakan ID dari parameter route
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.json({ msg: `Buku dengan id ${req.params.id} berhasil di-update`, book });
    } catch (err) {
        console.error("Update Error:", err);
        res.status(400).json({ error: err.message });
    }
}



async function deleteBook(req,res) {
        try{
            const book = await Book.findByIdAndDelete(req.params.id);
            if(!book){
                res.status(400).json({error:"Book not found"});
            }
            res.json({msg:"Buku berhasil dihapus"})
        }catch(err){
            res.status(400).json({error:err.message});
        }
}

export default{
    addBook,getAllBooks, updateBook,getBookById,deleteBook
}