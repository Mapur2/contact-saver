const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require('./db/connectDB');
const router = require('./routers/router');
const cors= require('cors')
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST"],
    credentials:true
}))


app.use("/saver/api/",router)

connectDB()
.then(()=>{
    app.listen(3000,()=>console.log("DB connected and server started "))
}).catch((err)=>{
    console.log(err)
})