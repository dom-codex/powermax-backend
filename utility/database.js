/*const harperive = require("harperive")
const Client = harperive.Client
const client = new Client({
    harperHost:process.env.DBHost,
    username:process.env.DBUsername,
    password:process.env.DBPassword,
    schema:"dev",
})

module.exports = client
*/
const mongoose = require("mongoose")
const connection = mongoose.connect
module.exports = connection