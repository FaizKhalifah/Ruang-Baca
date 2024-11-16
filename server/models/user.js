import {Schema} from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        enum: ['user', 'admin', 'member'],
        default: 'user',
      },
      NIM: { type: String, required: function() { return this.role === 'member'; }},
      faculty: { type: String, required: function() { return this.role === 'member'; }},
      department: { type: String, required: function() { return this.role === 'member'; }},
});

const User = mongoose.model('User',userSchema);
export default User;