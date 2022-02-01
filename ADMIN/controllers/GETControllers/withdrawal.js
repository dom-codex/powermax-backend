const withdrawalDb = require("../../../models/withdrawalSlip")
exports.getWithdrawalRequest = async(req,res,next)=>{
    try{
        const withdrawals = await withdrawalDb.find()
        return res.status(200).json({
            withdrawals
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}