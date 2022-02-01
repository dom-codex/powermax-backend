const userDb = require("../../../models/user")
const {ObjectId} = require("mongoose").Types
exports.addProfit = async(req,res,next)=>{
    try{
        const {userId,amount} = req.body
        //FIND DEPOSIT
        const user = await userDb.findOne({
            _id:ObjectId(userId)
        })
        const newProfit = parseInt(user.profit) + parseInt(amount);
        user.profit = newProfit
        await user.save()
        res.status(200).json({
            message:"DONE",
            profit:newProfit
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}
exports.updateUserStatus = async(req,res,next)=>{
    try{
        const {userId,status} = req.body
        const user = await userDb.findOne({
            _id:ObjectId(userId)
        })
        user.status = status
        await user.save();
        res.status(200).json({
            message:"DONE",
            status:status
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}