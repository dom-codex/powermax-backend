const adminDb = require("../models/admin")
const bcrypt = require("bcrypt")
const createAdminIfNotExist = async()=>{
    try{
//CHECK IF ADMIN ALREADY EXISTS
const admin = await adminDb.findOne({
    email:process.env.adminDefaultEmail
})
//CREATE ADMIN IF NOT FOUND
if(!admin){
    //HASH DEFAULT PASSWORD
    const hashedPassword = await bcrypt.hash(process.env.adminDefaultPassword,12)
const newadmin  = await adminDb.create({
    email:process.env.adminDefaultEmail,
    password:hashedPassword,
    name:process.env.adminName

})
}
    }catch(e){
        console.log(e)
        res.status(500).json({
            message:"an error occurred"
        })
    }
}
module.exports = createAdminIfNotExist