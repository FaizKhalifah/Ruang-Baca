import { Schema } from "mongoose";
import mongoose from "mongoose";

const karyawanSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    nip:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required: [true, 'Please enter an email'],
        unique: true,
    }
})

const Karyawan = mongoose.model('Karyawan',karyawanSchema);
export default Karyawan;

