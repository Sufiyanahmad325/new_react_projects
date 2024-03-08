import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


const registerUser = asyncHandler(async (req, res) => {
   const { fullName, email, username, password } = req.body

   /*below this is (if condition) there are another (if condition ) which is work like it 
   if(!fullName || !email || !username || !password){
       throw new ApiError(400 , "fill all credential")
   }*/

   if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
      throw new ApiError(400, "all field are required")
   }

   const existedUser = await User.findOne({
      $or: [{ username }, { email }]
   })

   if (existedUser) {
      throw new ApiError(409, "user with email or username already exists")
   }
   const avatarLocalPath = await req.files?.avatar[0]?.path
   const coverImgaeLocalPath = await req.files?.coverImage[0]?.path


   console.log("this is your file path ==========>", avatarLocalPath);
   console.log("this is your file path ==========>", coverImgaeLocalPath);

   if (!avatarLocalPath) {
      throw new ApiError(400, "Avatar file is required")
   }


   const avatar = await uploadOnCloudinary(avatarLocalPath)
   const coverImage = await uploadOnCloudinary(coverImgaeLocalPath)


   if (!avatar) {
      throw new ApiError(400, "Avatar file is required")
   }


   const user = await User.create({
      fullName,
      avatar: avatar.url,
      coverImage: coverImage.url || "",
      email,
      password,
      username: username.toLowerCase()
   })


   const createUser = await User.findOne({email}).select(
      "-password -refreshToken"
   )

   return res.status(201).json(
      new ApiResponse(200, createUser, "User register successfully")
   )



})



export {
   registerUser
}