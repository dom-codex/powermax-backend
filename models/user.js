const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"activated"
    },
    profit:{
        type:Number,
        default:0
    }
},{timestamps:true})
module.exports = mongoose.model("User",userSchema)