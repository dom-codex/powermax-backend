const userDb = require("../../models/user")
exports.ValidateUserEmail = async(req,res,next)=>{
    try{
        //GET USER EMAIL
        const {email} = req.body
        //CHECK IF EMAIL EXISTS ON DATABASE
        const user = await userDb.findOne({
            email:email
        })
        //ACT ACCORDINLY
        //IF USER IS NULL FORWARD REQUEST
        if(!user){
            return next()
        }
        //ELSE SEND RESPONSE THAT ACCOUNT ALREADY EXISTS
        res.status(400).json({
            message:"this email is already associated with an account"
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}