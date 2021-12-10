const router = require("express").Router()
const {validateUserOnGetRequest} = require("../helpers/DataBaseValidator/userValidator")
const {getProfit} = require("../controllers/userControllers/GETcontrollers/profit")
router.get("/profit",validateUserOnGetRequest,getProfit)
module.exports = router