const adminDb = require("../../models/admin")
const bcrypt = require("bcrypt")
exports.loginAdmin = async(req,res,next)=>{
    try{
        const {email,password} = req.body
        //FIND ADMIN
        const admin = await adminDb.findOne({
            email:email
        })
        if(!admin){
            return res.status(404).json({
                message:"admin not found"
            })
        }
        //VALIDATE PASSWORD
        const isValid = await bcrypt.compare(password,admin.password)
        if(!isValid){
            return res.status(401).json({
                message:"invalid email or password"
            })
        }
        //COMFIRM LOGIN
        res.status(200).json({
            message:"logged in",
            adminId:admin._id.toString(),
            name:admin.name,
            email:admin.email
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}