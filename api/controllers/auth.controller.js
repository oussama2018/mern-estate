import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
export const signup=async (req,res)=>{
const {username, email, password} =req.body;
const hashedPassword = bcryptjs.hashSync(password,10)
const existingUser= User.findOne({email,username});
/* if (existingUser){
    return res.json('User already existed')
} */
const newUser = new User({username, email, password:hashedPassword})
try {
    await newUser.save()
res.status(201).json({message:'user created successufuly'})
} catch (error) {
    res.status(500).json(error.message)
}

}
