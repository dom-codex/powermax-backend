const depositDb = require("../../../models/deposit")
exports.createNewDeposit = async (req, res, next) => {
    try {
        //GET USER FROM USER REQ
        const { user } = req
        //GET AMOUNT FROM REQUEST BODY
        const { amount, userId } = req.body
        //CHECK IF USER HAS MADE A DEPOSIT BEFORE
        const oldDeposit = await depositDb.findOne({
            userId: userId
        })
        if (oldDeposit == null) {
            //CREATE NEW DEPOSIT
            const newDeposit = await depositDb.create({
                amount,
                userId
            })
            return res.status(201).json({
                message: "deposit sucessful"
            })
        }
        //UPDATE OLD DEPOSIT
        oldDeposit.amount = oldDeposit.amount + amount
        await oldDeposit.save()
        res.status(200).json({
            message:"deposit successful"
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "an error occurred"
        })
    }
}