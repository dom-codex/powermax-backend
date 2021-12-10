const mongoose = require("mongoose")
const slipSchema = new mongoose.Schema({
    amount:{
        type:Number,
        default:0
    },
    userId:{
        type:String
    },
    approved:{
        type:Boolean,
        default:false
    }
})
module.exports = mongoose.model("WithdrawalSlip",slipSchema)