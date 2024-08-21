import { Schema } from "mongoose";
import mongoose from "mongoose";
import bcrypt from bcrypt;

const adminSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },email:{
        type:String,
        required:true,
        unique:true
    },password:{
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters'],
    }
})

const Admin = mongoose.model("Admin",adminSchema);
export default Admin;