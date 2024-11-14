import Journal from "../../models/journal.js";

async function getAllJournals(req,res) {
    try{
        const journals = await Journal.find();
        if(journals.length==0){
            res.status(201).json({msg:"Belum ada journal di database"})
        }
        res.status(201).json(journals);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

async function getJournalById(req,res) {
    try{
        const journal = await Journal.findById(req.params.id);
        if(!journal){
            res.status(400).json({error:"journal not found"});
        }
        res.status(201).json(journal);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

async function addJournal(req,res) {
    try{
        const {title,authors,publishedYear,publisher,volume,number}= req.body;
        let journal = await Journal.findOne({title});
        if(journal){
           return res.status(401).json({error:"Journal already exist"});
        }
        journal = new Journal({
            title,authors,publishedYear,publisher,volume,number
        })
        await journal.save();
        res.status(201).json({msg:"journal berhasil disimpan"});
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

async function updateJournal(req,res) {
    try{
        const journal = await Journal.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!journal){
            res.status(400).json({error:"journal not found"});
        }
        res.json({msg:"Journal has been updated"});
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

async function deleteJournal(req,res) {
    try{
        const journal = await Journal.findByIdAndDelete(req.params.id);
        if(!journal){
            res.status(400).json({error:"Journal not found"});
        }
        res.status(201).json({msg:"Journal deleted succesfully"});
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

export default {
    getAllJournals,getJournalById,addJournal,updateJournal,deleteJournal
}