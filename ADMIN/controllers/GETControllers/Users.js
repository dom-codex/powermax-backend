const userDb = require("../../../models/user")
const depositDb = require("../../../models/deposit")
const withdrawalDb = require("../../../models/withdrawalSlip")
const {ObjectId} = require("mongoose").Types
const transactionDb = require("../../../models/transaction")
exports.getUsers = async(req,res,next)=>{
    try{
        const {page} = req.query
        const users = await userDb.find()
        if(users.length <= 0){
            return res.status(200).json({
                users:[]
            })
        }

        //GET USER IDS
        /*const ids = await getUserIds(users)
        //FIND DEPOSITS
        const deposits = await depositDb.find({
            userId:{$in:ids}
        })*/

     //   const newUserList = await processUsersList(users,deposits)
        return res.status(200).json({
            users:users
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
    //GET TRANSACTIONS
    const transactions = await transactionDb.find({
        email:user.email
    })
        res.status(200).json({
            name:user._doc.name,
            email:user._doc.email,
            phone:user.phone,
            profit:user.profit,
            transactions:transactions.length?transactions:[]
            
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}
const getUserIds = async(users)=>{
    return users.map(user=>user._doc._id)
}
const processUsersList = async(list,slips)=>{
    return list.map(user=>{
        //FIND USER SLIP
        const slip = slips.find((slip)=>slip._doc.userId.toString() == user._doc._id.toString())
        return {
            deposit:slip==null?0:slip.amount,
            profit:slip==null?0:slip.profit,
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