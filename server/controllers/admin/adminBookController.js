import Book from "../../models/book";

async function addBook(req,res) {
    try{
        const {title,author,publishedYear,publisher,isbn} = req.body;
        let book = await Book.findOne(isbn);
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

export default{
    addBook
}