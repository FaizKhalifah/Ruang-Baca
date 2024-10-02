import express from "express";
import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

async function register(req,res) {
    const {username, email,password,rol}= req.body;
    try{
        let user = User.findOne({email});
        if(user){
            return res.status(400).json({msg:"user already exist"});
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password,salt);

        user = new User({
            username,email,password:hashedPassword,role:"user"
        });

        await user.save();
        res.status(201).json({msg:"User registered"});

    }catch(err){
        res.status(500).json({error:err.message});
    }
}

async function login(req,res) {
    
}

export default{
    register,login
}