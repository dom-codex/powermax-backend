exports.signUper = async(req,res,next)=>{
    try{

    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"An error occurred"
        })
    }
}