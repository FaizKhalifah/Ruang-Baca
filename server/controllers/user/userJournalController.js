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