import asyncHandler from "../utils/asyncHandler.js";
import ApiError from '../utils/ApiError.js'
import jwt from 'jsonwebtoken'
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async(req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
    
        if(!token){
            throw new ApiError(400 , "unauthorized request")
        }
    
       const  decondeToken = await jwt.verify(token , process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decondeToken._id).select("-password -refreshToken")
    console.log(decondeToken);
        if(!user){
            throw new ApiError(401 , "invalid Access Token")
        }
        req.user = user
        next()
    
    } catch (error) {
        throw new ApiError(400 , error?.message || "invalid access Token")
    }


})