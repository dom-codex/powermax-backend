const router = require("express").Router()
const {validateAdmin} = require("../validation/validateAdmin")
const {addProfit} = require("../controllers/POSTControllers/profit")
router.post("/user/profit",(req,res,next)=>validateAdmin(req.body.adminId,res,next),addProfit)
module.exports = router