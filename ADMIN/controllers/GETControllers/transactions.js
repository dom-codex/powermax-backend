const transactionDb = require("../../../models/transaction")
exports.getTransactions = async(req,res,next)=>{
    try{
        const transactions = await transactionDb.find()
        return res.status(200).json({
            transactions:transactions
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}