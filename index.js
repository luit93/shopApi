

//dependencies
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const userRoute = require('./routes/user')

dotenv.config()

//connect to mongo db
mongoose.connect(process.env.MONGO_URL).then(()=>console.log('Database connection successful')).catch((err)=>{console.log(err)})

//testing
app.get("/api/test",()=>{
    console.log('testing ....')
})

app.use(express.json())
app.use('/api/users',userRoute)


app.listen( process.env.PORT || 6050,()=>{
    console.log('backend server is running')
})