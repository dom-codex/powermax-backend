const router = require("express").Router()
const {loginAdmin} = require("../controllers/auth/login")
const {changePassword, createAdmin} = require("../controllers/auth/changePassword")
const { validateAdmin } = require("../validation/validateAdmin")
router.post("/login",loginAdmin)
router.post("/change/password",changePassword)
router.post("/create",(req,res,next)=>validateAdmin(req.body.adminId,res,next),createAdmin)
module.exports = router