const userDb = require("../../../models/user");
const transactionDb = require("../../../models/transaction")
exports.getProfit = async(req,res,next)=>{
    try{
        const {user} = req
        return res.status(200).json({
            profit:user.profit
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}
exports.getTransactionCost = async(req,res,next)=>{
    try{
        const {user} = req;
        const data = await transactionDb.find({email:user.email})
        let sum = 0
        data.forEach((tx)=>{
            sum+=tx.amount
        })
        res.status(200).json({
        total:sum
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}