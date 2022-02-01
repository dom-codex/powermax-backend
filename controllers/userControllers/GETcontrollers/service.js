const serviceDb = require("../../../ADMIN/models/service")
exports.getAllService = async(req,res,next)=>{
    try{
        const services = await serviceDb.find()
        const allService = services.map((service)=>{
            return {
                name:service.name,
                price:service.price,
                des
            }
        })
        res.status(200).json({
            message:"success",
            services
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}