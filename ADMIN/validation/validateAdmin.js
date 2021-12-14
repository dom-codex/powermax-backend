const adminDb=require("../models/admin")
const {ObjectId} = require("mongoose").Types
const validateAdmin = async(adminId)=>{
    const admin  = await adminDb.findOne({
        _id:ObjectId(adminId)
    })
    if(!admin){
        return false
    }
    return true
}
exports.validateAdmin = async(adminId,res,next)=>{
    try{
        const isAdminValid = await validateAdmin(adminId)
        if(isAdminValid){
            return next()
        }else{
            res.status(404).json({
                message:"admin not found"
            })
        }
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}