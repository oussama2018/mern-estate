import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './router/user.router.js'
import authRouter from './router/auth.router.js'
dotenv.config();
const app= express()
app.use(express.json())
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
app.use('/api/auth',authRouter)