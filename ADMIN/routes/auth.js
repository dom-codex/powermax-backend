const router = require("express").Router()
const {loginAdmin} = require("../controllers/auth/login")
const {changePassword} = require("../controllers/auth/changePassword")
router.post("/login",loginAdmin)
router.post("/change/password",changePassword)
module.exports = router