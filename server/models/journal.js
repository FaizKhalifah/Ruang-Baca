import mongoose, { Schema, Mongoose } from "mongoose";

const journalSchema = new Schema({
    title:{
        type:String
    },authors:{
        type:Array
    },
    publishedYear:{
        type:Number
    },
    journal:{
        type:String
    },
    volume:{
        type:Number
    },
    number:{
        type:Number
    }
})

const Journal = mongoose.model('Journal',journalSchema);
export default Journal;