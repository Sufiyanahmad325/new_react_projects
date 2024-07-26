import mongoose from "mongoose"
import bcryptjs from 'bcryptjs'


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true,

    },
    fullName:{
        type:String,
        required:true,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true 
    },
    Password:{
        type:String,
        required:true
    }



},{timestamps:true})


userSchema.pre("save" ,async function(next){
    if(!this.isModified('Password')) next()
        this.Password = await bcryptjs.hash(this.Password , 10 )
})


userSchema.methods.isPasswordCorrect= async function(Password){
        return await bcryptjs.compare(Password , this.Password)
}


export const User = mongoose.model("Rendom" , userSchema ) 