import mongoose from "mongoose";
import User from "../../models/user.js";
import bcrypt from "bcrypt";

mongoose.connect('mongodb://localhost:27017/ruangbaca');

async function userSeeder() {
    try{
        const salt = await bcrypt.genSalt();
        const adminPassword = await bcrypt.hash('adminPassword',salt);
        const userPasswword = await bcrypt.hash('userPassword',salt);

        const users=[
            { username: 'admin', email: 'admin@example.com', password: adminPassword, role: 'admin' },
            { username: 'ravi', email: 'ravi@gmail.com', password: userPasswword, role: 'user' },
            { username: 'Yasin', email: 'Yasin@gmail.com', password: userPasswword, role: 'user' },      
        ]

        await User.insertMany(users);
        console.log("Seeder user berhasil dijalankan");
        mongoose.disconnect();
    }catch(err){
        console.log(err);
        mongoose.disconnect();
    }
}

userSeeder();