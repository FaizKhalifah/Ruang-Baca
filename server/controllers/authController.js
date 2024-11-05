import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

async function register(req, res) {
    const { username, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
       
        user = new User({
            username,
            email,
            password: hashedPassword,
            role: "user"
        });

        // Menyimpan user ke database
        await user.save();
        const token = jwt.sign(
            { id: user._id, role: user.role },
            'your_jwt_secret',
            { expiresIn: '1h' }
        );

        res.status(201).json({ token, role:user.role });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    try {
        // Mencari user berdasarkan email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Email not found' });
        }

        // Memverifikasi password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ passwordasli:password, password:user.password, msg: 'Wrong password' });
        }

        // Membuat JWT
        const token = jwt.sign(
            { id: user._id, role: user.role },
            'your_jwt_secret',
            { expiresIn: '1h' }
        );

        // Mengembalikan token dan role ke client
        res.json({ token, role: user.role });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export default {
    register,
    login
};
