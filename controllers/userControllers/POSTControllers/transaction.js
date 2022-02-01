const transactionDb = require("../../../models/transaction")
exports.createTransaction = async(req,res,next)=>{
    try{
        const {user} = req
        const {amount,type} = req.body
        const transaction = await transactionDb.create({
            name:user.name,
            email:user.email,
            amount:amount,
            transactionType:type
        })
        return res.status(200).json({
            message:"created successfully"
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}