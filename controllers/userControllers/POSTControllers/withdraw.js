const withdrawalDb = require("../../../models/withdrawalSlip")
exports.requestWithdrawal = async (req, res, next) => {
    try {
        const {user} = req
        const {amount} = req.body
        const slip = await withdrawalDb.create({
            name:user.name,
            email:user.email,
            amount:amount
        })
    
        return res.status(201).json({
            message:"withdrawal request successful"
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "an error occurred"
        })
    }
}