const userDb = require("../../models/user")
exports.loginUser = async(req,res,next)=>{
    try{
        //GET USER EMAIL FROM BODY
        const {email} = req.body
        //FIND USER FROM DATABASE
        const user = await userDb.findOne({
            email:email
        })
        if(!user){
            return res.status(404).json({
                message:"user not found"
            })
        }
        //RETURN RESPONSE TO USER
        res.status(200).json({
           email:email,
           name:user.name,
           userId:user._id.toString(),
           message:"log in succesful"
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}