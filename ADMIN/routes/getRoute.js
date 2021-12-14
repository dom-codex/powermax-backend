const router = require("express").Router()
const { getUsers,getUser } = require("../controllers/GETControllers/Users")
const { validateAdmin } = require("../validation/validateAdmin")
router.get("/users", (req, res, next) => validateAdmin(req.query.adminId, res, next), getUsers)
router.get("/user",(req, res, next) => validateAdmin(req.query.adminId, res, next),getUser)
module.exports = router