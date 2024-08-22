import { Schema } from "mongoose";
import mongoose from "mongoose";

const fasilitasSchmea = new Schema({
    facilityname:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

const Fasilitas = mongoose.model('Fasilitas',fasilitasSchmea);
export default Fasilitas;