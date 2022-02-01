const serviceDb = require("../../models/service")
exports.getServices = async(req,res,next)=>{
    try{
        const services = await serviceDb.find()
        res.status(200).json({
            services:services,
            message:"success"
        })

    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}