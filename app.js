const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const helmet = require("helmet")
const http = require("http")
const app = express()
const server = http.createServer(app)
const db = require("./utility/database")
//SETUP DEFAULT MIDDLEWARES
//CUSTOM MIDDLEWARE IMPORTS
const authRoutes = require("./router/auth")
const createRoutes = require("./router/create")
const getRoutes = require("./router/getRoute")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors())
app.use(helmet())


//CUSTOM MIDDLEWARES
app.use("/auth",authRoutes)
app.use("/new",createRoutes)
app.use("/get",getRoutes)
//SET UP SERVER
 db(process.env.DBHost).then(_=>{
 server.listen(process.env.PORT,()=>{
    console.log("server live")
})    
 })
