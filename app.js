const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const helmet = require("helmet")
const http = require("http")
const app = express()
const server = http.createServer(app)
const db = require("./utility/database")
const createAdminIfNotExist = require("./ADMIN/utils/createAdminOnFirstLaunch")
//SETUP DEFAULT MIDDLEWARES
//CUSTOM MIDDLEWARE IMPORTS
const authRoutes = require("./router/auth")
const createRoutes = require("./router/create")
const getRoutes = require("./router/getRoute")
//ADMIN ROUTE
const adminAuthRoutes = require("./ADMIN/routes/auth")
const adminGetRoutes = require("./ADMIN/routes/getRoute")
const adminUpdateRoutes = require("./ADMIN/routes/updateRoute")
const adminCreateRoutes = require("./ADMIN/routes/createRoutes")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors(
   {
   origin:"*"
   }
))
app.use(helmet())


//CUSTOM MIDDLEWARES
app.use("/auth",authRoutes)
app.use("/new",createRoutes)
app.use("/get",getRoutes)
//ADMIN MIDDLEWARE
app.use("/admin/auth",adminAuthRoutes)
app.use("/admin/get",adminGetRoutes)
app.use("/admin/update",adminUpdateRoutes)
app.use("/admin/new",adminCreateRoutes)
//SET UP SERVER
 db(process.env.DbHost).then(async()=>{
    await createAdminIfNotExist()
 server.listen(process.env.PORT,()=>{
    console.log("server live")
})    
 })
