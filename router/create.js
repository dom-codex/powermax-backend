const router = require("express").Router()
const {validateDepositAmount} = require("../helpers/inputValidators/userRequests")
const {validateUser} = require("../helpers/DataBaseValidator/userValidator")
const {createNewDeposit} = require("../controllers/userControllers/POSTControllers/deposit")
const {requestWithdrawal} = require("../controllers/userControllers/POSTControllers/withdraw")
router.post("/deposit",validateUser,validateDepositAmount,createNewDeposit)
router.post("/withdrawal",validateUser,validateDepositAmount,requestWithdrawal)
module.exports = router