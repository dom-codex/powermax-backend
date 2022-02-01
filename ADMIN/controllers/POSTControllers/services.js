const serviceDb = require("../../models/service");
exports.createService = async(req,res,next)=>{
    try{
        const {name,price,descriptions,serviceType}  =req.body
        
        const newService = await serviceDb.create({
            name:name,
            price:price,
            descriptions:descriptions,
            serviceType:serviceType.toLowerCase()
        })
        res.status(200).json({
            message:"DONE",
            service:newService
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}
exports.updateService = async(req,res,next)=>{
    try{
        const {price,serviceId}  = req.body;
        const service = await serviceDb.findById(serviceId);
        service.price = price
        await service.save()
        res.status(200).json({
            service,
            message:"DONE"
        })

    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}
exports.deleteService = async(req,res,next)=>{
    try{
        const {serviceId} = req.body
        await serviceDb.findByIdAndDelete(serviceId)
        res.status(200).json({
            message:"DONE"
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}