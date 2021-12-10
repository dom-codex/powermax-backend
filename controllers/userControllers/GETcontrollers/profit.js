const depositDb = require("../../../models/deposit")
exports.getProfit = async(req,res,next)=>{
    try{
        const {userId} = req.query
        const slip = await depositDb.findOne({
            userId:userId
        })
        if(!slip){
            return res.status(404).json({
                message:"you haven't made any deposit"
            })
        
        }
        return res.status(200).json({
            profit:slip.profit
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}