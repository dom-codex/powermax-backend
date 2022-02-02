const router = require("express").Router()
const {validateUserOnGetRequest} = require("../helpers/DataBaseValidator/userValidator")
const {getProfit,getTransactionCost} = require("../controllers/userControllers/GETcontrollers/profit")
const { getServices } = require("../ADMIN/controllers/GETControllers/services")
router.get("/profit",validateUserOnGetRequest,getProfit)
router.get("/transaction",validateUserOnGetRequest,getTransactionCost)
router.get("/all/services",getServices)
module.exports = router