import userModel from "../models/userModel.js";
import validator from "validator"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken = (id,role) => {
    return jwt.sign({id, role}, process.env.JWT_SECRET)
}

const loginUser = async (req, res) => {

   try {
    const { email, password } = req.body;
    const user = await userModel.findOne({email});

    if(!user){
        return res.json({success:false, message:"User doesn't exists"})
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(isMatch){
        const token = createToken(user._id, user.role)
        res.json({success:true, token})
    }else{
        res.json({success:false, message:"Invalid credentials"})
    }

   } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message })
   }

}

//Route for user Register
const registerUser = async (req, res) => {

   try {
    const { name, email, password, role } = req.body;
    const exists = await userModel.findOne({email});

    //checking user already exists or not
    if(exists){
        return res.json({success:false, message:"User already exists"})
    }

    //validating email format & strong password
    if(!validator.isEmail(email)){
        return res.json({success:false, message:"Please enter a valid email"})
    }

    //check strong password
    if(password.length < 8 ){
        return res.json({success:false, message:"Please enter a strong password greater than 7"})
    }

    //hashing user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new userModel({
        name,
        email,
        role,
        password:hashedPassword
    })

    const user = await newUser.save()

    const token = createToken(user._id, user.role)

    res.json({success:true, token})

   } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message })
   }

}


export { loginUser, registerUser }