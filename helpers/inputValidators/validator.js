const Validator = require("validatorjs")
//VALIDATION UTILITY METHODS
const validateNameInputOnly = async(body)=>{
    const rules = {
        name:"required"
    }
    const validation = new Validator(body,rules)
    return validation.check()
}
const validateEmailInputOnly = async(body)=>{
    const rules = {
        email:"required|email"
    } 
    const validation = new Validator(body,rules)
    return validation.check()
}
exports.validateUserDetails = async(req,res,next)=>{
    try{
        const isEmailInputValid = await validateEmailInputOnly(req.body)
        const isNameInputValid = await validateNameInputOnly(req.body)
        if(isEmailInputValid && isNameInputValid){
            next()
        }else{
            res.status(401).json({
                message:"invalid email address or name"
            })
        }
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}
//METHOD FOR VALIDATING USER INPUT DURING LOGIN
exports.validateLoginInputField = async(req,res,next)=>{
    try{
        const isEmailInputValid = await validateEmailInputOnly(req.body)
        if(isEmailInputValid){
            next()
        }else{
            res.status(401).json({
                message:"invalid email address or name"
            })
        }  
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}