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
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors())
app.use(helmet())


//CUSTOM MIDDLEWARES
app.use("/auth",authRoutes)
app.use("/new",createRoutes)
//SET UP SERVER
 db(process.env.DBHost).then(_=>{
 server.listen(4000,()=>{
    console.log("server live")
})    
 })
