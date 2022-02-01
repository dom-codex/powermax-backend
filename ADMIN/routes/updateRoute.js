const router = require("express").Router()
const {validateAdmin} = require("../validation/validateAdmin")
const {addProfit,updateUserStatus} = require("../controllers/POSTControllers/profit");
const { deleteService,updateService } = require("../controllers/POSTControllers/services");
router.post("/user/profit",(req,res,next)=>validateAdmin(req.body.adminId,res,next),addProfit);
router.post("/user/status",(req,res,next)=>validateAdmin(req.body.adminId,res,next),updateUserStatus)
router.post("/delete/service",(req,res,next)=>validateAdmin(req.body.adminId,res,next),deleteService)
router.post("/service/price",(req,res,next)=>validateAdmin(req.body.adminId,res,next),updateService)
module.exports = router