const router = require("express").Router()
//VALIDATE USER DETAILS MIDDLEWARE CHECKS THAT THE EMAIL REQUEST BODY IS NOT EMPTY AND ITS VALUE COMFORMS TO EMAIL STANDARDS
const {validateUserDetails,validateLoginInputField} = require("../helpers/inputValidators/validator")
//VAlIDATE USER EMAIL ENSURES EMAIL IS UNIQUE 
const {ValidateUserEmail} = require("../helpers/DataBaseValidator/emailValidator")
const {signUpUser} = require("../controllers/auth/signup")
const {loginUser} = require("../controllers/auth/login")
router.post("/signup",validateUserDetails,ValidateUserEmail,signUpUser)
router.post("/login",validateLoginInputField,loginUser)
module.exports = router