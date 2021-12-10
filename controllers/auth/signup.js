const userDb = require("../../models/user")
exports.signUpUser = async(req,res,next)=>{
    try{
//GET USER DETAILS
const {name,email} = req.body
//CREATE NEW USER
const newUser = await userDb.create({
    name,email
})
//RETURN RESPONSE TO USER
return res.status(201).json({
    name,
    email,
    message:"account created successfully"
})
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"An error occurred"
        })
    }
}