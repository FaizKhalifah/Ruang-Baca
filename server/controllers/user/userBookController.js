import Book from "../../models/book.js";
import Loan from "../../models/loan.js";
import User from "../../models/user.js";
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

async function loanBook(req,res) {
    try {
        const { userId, bookId } = req.body;
        // Pastikan buku tersedia untuk dipinjam
        const book = await Book.findById(bookId);
        if (!book) return res.status(404).json({ message: 'Book not found' });
    
        // Periksa apakah buku sudah dipinjam
        const existingLoan = await Loan.findOne({ bookId, status: 'borrowed' });
        if (existingLoan) return res.status(400).json({ message: 'Book is already borrowed' });
    
        // Buat catatan peminjaman
        const loan = new Loan({ userId, bookId });
        await loan.save();
    
        res.status(201).json({ message: 'Book borrowed successfully', loan });
      } catch (err) {
        res.status(500).json({ message: 'Error borrowing book', error: err.message });
      }
}

async function returnBook(req,res) {
    try{
        const {userId, loanId} = req.body;
        const loan = await Loan.findById(loanId);
        if (!loan || loan.status === 'returned') {
            return res.status(400).json({ message: 'Invalid loan record' });
          }
        const user = await User.findById(userId);
        console.log(user);
        if(user.id!=loan.userId){
            return res.status(400).json({ message: 'Invalid user record on loan transaction' });
        }
        loan.status = 'returned';
        loan.returnDate = Date.now();
        await loan.save();
        res.status(200).json({ message: 'Book returned successfully', loan });

    }catch(err){
        return res.json({"msg":"error returning book"})
    }
}
export default{
    getBookById, getAllBooks,loanBook,returnBook
}