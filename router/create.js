const router = require("express").Router()
const {validateDepositAmount} = require("../helpers/inputValidators/userRequests")
const {validateUser} = require("../helpers/DataBaseValidator/userValidator")
const {createNewDeposit} = require("../controllers/userControllers/POSTControllers/deposit")
router.post("/deposit",validateUser,validateDepositAmount,createNewDeposit)
module.exports = router