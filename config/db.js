const mongoose = require('mongoose');
require('dotenv').config()
const express = require('express')
const app = express()
require('dotenv').config()


const connectDB = async () =>{
  try{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('MongoDB connected successfully');
  
    const port = process.env.PORT || 3001
    app.listen(port, ()=>{
        console.log(`Server started on port ${port}`)
    })
  }catch(error) {
    console.log(error)
  }
  }

//code originally in server.js put here if need to replace above code 
//mongoose
//.connect("mongodb://127.0.0.1:27017/fitness-db")
//.then(()=>{
  //  app.listen(port, ()=>{
    //    console.log(`Server started on port ${port}`)
   //     console.log('MongoDB Connected')
   // })
//})
//.catch((error)=>{
  //  console.log(error)
//})
module.exports = connectDB
