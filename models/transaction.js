const mongoose = require("mongoose")
 const transactionSchema =  new mongoose.Schema({
     name:{
         type:String,
         required:true
     },
     email:{
         type:String,
         required:true
     },
     transactionType:{
         type:String,
         default:null
     },
     amount:{
         type:Number,
         required:true
     }
 },{timestamps:true})
 module.exports = mongoose.model("transaction",transactionSchema)