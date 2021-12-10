const Validator = require("validatorjs")
exports.validateDepositAmount = async(req,res,next)=>{
const {amount} = req.body
const rule = {
    amount:"required"
}
const validator = new Validator(req.body,rule)
if(validator.passes()){
    return next()
}
res.status(400).json({
    message:"invalid amount"
})
}