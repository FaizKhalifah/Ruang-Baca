import { Schema } from "mongoose";
import mongoose from "mongoose";

const mahasiswaSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    nim:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required: [true, 'Please enter an email'],
        unique: true,
    }
});

const Mahasiswa = mongoose.model('Mahasiswa',mahasiswaSchema);
export default Mahasiswa;