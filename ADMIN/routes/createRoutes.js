const { createService } = require("../controllers/POSTControllers/services")
const {validateAdmin} = require("../validation/validateAdmin")
const router = require("express").Router()
router.post("/service",(req,res,next)=>validateAdmin(req.body.adminId,res,next),createService)
module.exports = router;