const depositDb = require("../../../models/deposit")
exports.addProfit = async(req,res,next)=>{
    try{
        const {userId,amount} = req.body
        //FIND DEPOSIT
        const deposit = await depositDb.findOne({
            userId:userId
        })
        if(!deposit){
            return res.status(404).json({
                message:"deposit slip not found"
            })
        }
        //INCREMENT PROFIT
        deposit.profit = deposit.profit + parseInt(amount)
        await deposit.save()
        res.status(200).json({
            message:"DONE"
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}