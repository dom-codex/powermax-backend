const mongoose = require("mongoose")
 const depositSchema =  new mongoose.Schema({
     amount:{
         type:Number,
         default:0
     },
     userId:{
         type:String,
         default:null
     }
 },{timestamps:true})
 module.exports = mongoose.model("deposit",depositSchema)