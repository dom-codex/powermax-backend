const userDb = require("../../../models/user")
const depositDb = require("../../../models/deposit")
const withdrawalDb = require("../../../models/withdrawalSlip")
const {ObjectId} = require("mongoose").Types
exports.getUsers = async(req,res,next)=>{
    try{
        const {page} = req.query
        const users = await userDb.find().limit(50).skip((page-1)*50)
        if(users.length <= 0){
            return res.status(200).json({
                users:[]
            })
        }
        
        const newUserList = await processUsersList(users)
        return res.status(200).json({
            users:newUserList
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}
exports.getUser = async(req,res,next)=>{
    try{
        const {userId} = req.query
        //find user
        const user = await userDb.findOne({
            _id:ObjectId(userId)
        })
        if(!user){
            return res.status(404).json({
                message:"user not found"
            })
        }
        //GET SLIP
        const slip = await depositDb.findOne({
            userId:userId
        })
        //Withdrawals
        const wSlip = await withdrawalDb.find({
            userId:userId
        })
        const pslip = await processWithdrawalList(wSlip)
        res.status(200).json({
            name:user._doc.name,
            email:user._doc.email,
            profit:slip.profit?slip.profit:0,
            withdrawals:pslip.length>0?pslip:[]
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}

const processUsersList = async(list)=>{
    return list.map(user=>{
        return {
            
            userId:user._id.toString(),
            name:user._doc.name,
            email:user._doc.email
        }
    })

}
const processWithdrawalList = async(list)=>{
    return list.map(slip=>{
        return {
           amount:slip._doc.amount,
           approved:slip._doc.approved
        }
    })
}