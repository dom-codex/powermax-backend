const depositDb = require("../../../models/depsoit")
exports.setProfit = async(req,res,next)=>{
    try{
        const {amount,userId} = req.body
        const userProfit = await  depositDb.findOne({
            userId:userId
        })
        const previousProfit = userProfit.previousProfit
        const newProfit = previousProfit + amount
        //UPDATE NEW PROFIT
        userProfit.currentProfit = newProfit
        await userProfit.save()
        res.status(200).json({
            message:"profit set successfully"
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}