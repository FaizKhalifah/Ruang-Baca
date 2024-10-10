import mongoose from "mongoose";
import User from "../../models/user.js";

mongoose.connect('mongodb://localhost:27017/ruangbaca');

async function clearUser() {
    try{
        await User.deleteMany({});
        console.log("All users cleared");
        mongoose.disconnect();
    }catch(err){
        console.error(err);
        mongoose.disconnect();
    }
}

clearUser();