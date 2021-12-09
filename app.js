const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const app = express()
//SETUP DEFAULT MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(helmet())
//CUSTOM MIDDLEWARES
//SET UP SERVER
app.listen(process.env.PORT,()=>{
    console.log("server live")
})