import { Schema } from "mongoose";
import mongoose from "mongoose";

const bukuSchema = new Schema({
    judul:{
        type:String,
        required:true
    },
    penulis:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true
    }
})

const Buku = mongoose.model('Buku',bukuSchema);
export default Buku;