//CONTAINS VALIDATION MIDDLE WARE WHICH WILL BE CALLED FOR ALL REQUEST MADE BY THE USER AFTER LOGGED IN OTHER TO VALIDATE THEIR CREDENTIALS
const userDb = require("../../models/user")
const { ObjectId } = require("mongoose").Types
const checkDbForUser = async (userId) => {
    //FIND USER 
    const user = await userDb.findOne({
        _id: ObjectId(userId)
    })
    return user
}
exports.validateUser = async (req, res, next) => {
    try {

        const { userId } = req.body
        const user = await checkDbForUser(userId)
        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }
        req.user = user
        next()
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "an error occurred"
        })
    }
}
exports.validateUserOnGetRequest = async (req, res, next) => {
    try {
        const { userId } = req.query
        const user = await checkDbForUser(userId)
        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }
        req.user = user
        next()
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "an error occurred"
        })
    }
}