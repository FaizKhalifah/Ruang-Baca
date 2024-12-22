import mongoose from "mongoose";
import Book from "../../models/book.js"

mongoose.connect('mongodb://localhost:27017/ruangbaca');

async function bookSeeder() {
    try{
        const books = [
            {title:"komputer di industri 4.0", author : "Budi Gunawan", publishedYear: 2023, 
                publisher:"Bentang Pustaka", status:"free",isbn:"KGH9-KHGJ8-OIU8"},
                {title:"Narkoba digital", author : "Heri Kurniadi", publishedYear: 2024, 
                    publisher:"Bentang Pustaka", status:"free",isbn:"KGH9-JJKJ8-OIU8"},
                    {title:"Roadmap seorang Programmer", author : "Andi Budiman", publishedYear: 2023, 
                        publisher:"Elexindo", status:"free",isbn:"AAK8-KHGJ8-OIU8"},
                        {title:"Keluh Kesah Programmer", author : "Budi Gunawan", publishedYear: 2019, 
                            publisher:"Bentang Pustaka", status:"free",isbn:"KGH9-KHGJ8-AA98"},
                            {title:"Rekayasa Perangkat Lunak", author : "Budi Gunawan", publishedYear: 2021, 
                                publisher:"Bentang Pustaka", status:"free",isbn:"KGH9-KHGJ8-JH76"},
        ]
        await Book.insertMany(books);
        console.log("seeder buku berhasil ditambahkan");
        mongoose.disconnect()
    }catch(err){
        console.log(err);
        mongoose.disconnect();
    }
}

bookSeeder();