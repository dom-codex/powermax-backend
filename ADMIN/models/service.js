const mongoose = require("mongoose")
const serviceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        default:0
    },
    descriptions:{
        type:[{type:String}]
    },
    serviceType:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("services",serviceSchema)