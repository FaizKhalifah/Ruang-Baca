import Book from "../../models/book.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
async function addBook(req, res) {
    try {
        const { title, author, publishedYear, publisher, isbn } = req.body;

        // Periksa apakah buku dengan ISBN yang sama sudah ada
        let book = await Book.findOne({ isbn });
        if (book) {
            return res.status(400).json({ msg: "Buku sudah ada di database" });
        }

        // Jika ada file yang diunggah
        let imagePath = null;
        if (req.file) {
            const uploadDir = path.join(__dirname, '../uploads'); // Path absolut ke folder uploads

            // Pastikan folder uploads ada
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            imagePath = `/uploads/${req.file.filename}`;
        }

        // Buat buku baru
        book = new Book({
            title,
            author,
            publishedYear,
            publisher,
            isbn,
            imagePath, // Path relatif untuk diakses client
        });

        await book.save();
        res.status(201).json({ msg: "Buku berhasil disimpan", book });
    } catch (err) {
        res.status(500).json({ error: err.message });
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