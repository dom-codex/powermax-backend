const withdrawalDb = require("../../../models/withdrawalSlip")
exports.requestWithdrawal = async (req, res, next) => {
    try {
        const { amount,userId } = req.body
        //CHECK IF THERE'S A PENDING WITHDRAWAL REQUEST MADE BY THE USER
        const slip = await withdrawalDb.findOne({
            userId: userId
        })
        if (slip != null && !slip.approved) {
            return res.status(401).json({
                message: "you still have a pending withdrawal request"
            })
        }
        //CREATE NEW SLIP
        const newSlip = await withdrawalDb.create({
            amount: amount,
            userId: userId,
        })
        //NOTIFY ADMIN OF NEW WITHDRAWAL
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