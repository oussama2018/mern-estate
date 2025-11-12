import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './router/user.router.js'
dotenv.config();
const app= express()
mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log('Connect to mongodb')
})
.catch((err)=>{
    console.log(err)
})
app.listen(3000,()=>{
    console.log('Server is runing on port 3000')
})

app.use('/api/user',userRouter);