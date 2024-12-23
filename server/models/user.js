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
      books:{
        type:Array,
        default:[]
      },
      journals:{
        type:Array,
        default:[]
      },
      loanHistory:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Loan' }],
});

const User = mongoose.model('User',userSchema);
export default User;