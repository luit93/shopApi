

//dependencies
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const dotenv = require('dotenv')

dotenv.config()

//connect to mongo db
mongoose.connect(process.env.MONGO_URL).then(()=>console.log('Database connection successful')).catch((err)=>{console.log(err)})

//testing
app.get('/api/test',()=>{
    console.log('testing ....')
})
app.listen(process.env.PORT || 7000,()=>{
    console.log('backend server is running')
})