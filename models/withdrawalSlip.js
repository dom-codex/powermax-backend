const mongoose = require("mongoose")
const slipSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    }
})
module.exports = mongoose.model("WithdrawalSlip",slipSchema)