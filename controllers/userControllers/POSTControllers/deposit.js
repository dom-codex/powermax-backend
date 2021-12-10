const depositDb = require("../../../models/deposit")
exports.createNewDeposit = async(req,res,next)=>{
    try{
        //GET USER FROM USER REQ
        const {user} = req
        //GET AMOUNT FROM REQUEST BODY
        const {amount,userId} = req.body
        //CREATE NEW DEPOSIT
        const newDeposit = await depositDb.create({
            amount,
            userId
        })
        //SEND EMAIL TO ADMIN OF NEW DEPOSIT
        return res.status(201).json({
            message:"deposit created"
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}