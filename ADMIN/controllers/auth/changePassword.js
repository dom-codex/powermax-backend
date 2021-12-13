const adminDb = require("../../models/admin")
const bcrypt = require("bcrypt")
const {ObjectId} = require("mongoose").Types
exports.changePassword = async(req,res,next)=>{
    try{
        const {adminId,newPassword,oldPassword} = req.body
        //FIND ADMIN
        const admin = await adminDb.findById({
            _id:ObjectId(adminId)
        })
        if(!admin){
            return res.status(404).json({
                message:"admin does not exist"
            })
        }
        //Validate old password
        const oldPassValid = await bcrypt.compare(oldPassword,admin.password)
        if(!oldPassValid){
            return res.status(401).json({
                message:"password is incorrect"
            })
        }
        //HASH NEW PASSWORD AND ASSIGN
        const newHash = await bcrypt.hash(newPassword,12)
        admin.password = newHash
        await admin.save()
        res.status(201).json({
            message:"password changed"
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}