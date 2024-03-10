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
   // const coverImgaeLocalPath = await req.files?.coverImage[0]?.path



   let coverImgaeLocalPath;
   if (req.file && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
      req.files.coverImage[0].path
   }


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
      coverImage: coverImage?.url || " ",
      email,
      password,
      username: username.toLowerCase()
   })


   const createUser = await User.findById(user._id).select(
      "-password -refreshToken"
   )

   return res.status(201).json(
      new ApiResponse(200, createUser, "User register successfully")
   )



})





const loginUser = asyncHandler(async (req, res) => {
   const { email, username, password } = req.body

   if (!(email || username)) {
      throw new ApiError(400, 'username or email is required')
   }

   const user = await User.findOne({
      $or: [{ username }, { email }]
   })

   if (!user) {
      throw new ApiError(400, "user does not exist")
   }

   const isPasswordValid = await user.isPasswordCorrect(password)
   console.log("hello======================>");

   if (!isPasswordValid) {
      throw new ApiError(400, "invalid user credentials check your password")
   }

   const accessToken = await user.generateAccessToken()
   const refreshToken = await user.generateRefreshToken()

   user.refreshToken = refreshToken
   await user.save({ validateBeforeSave: false })

   const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

   const option = {
      httpOnly: true,
      secure: true
   }

   return res.status(200)
      .cookie("accessToken", accessToken, option)
      .cookie("refreshToken", refreshToken, option)
      .json(
         new ApiResponse(200, { user: loggedInUser, accessToken, refreshToken }, "user logged in successfully")
      )
})



const logoutUser = asyncHandler(async (req, res) => {
   const { _id } = req.user

   const userlogout = User.findByIdAndUpdate(_id, {
      $set: {
         refreshToken: undefined
      },
      new: true
   });



   const option = {
      httpOnly: true,
      secure: true
   }

   res.status(200)
      .clearCookie("accessToken", option)
      .clearCookie("refreshToken", option)
      .json(
         new ApiResponse(200, {}, "user logged out successfully")
      )
})



const getCurrentUser = asyncHandler(async (req, res) => {
   res.status(200)
      .json(
         new ApiResponse(200, req.user, "currenctuser fetch successfully")
      )
})






const changePassword = asyncHandler(async (req, res) => {
   const { password, newPassword, confirmPassword } = req.body

   if (newPassword !== confirmPassword) {
      throw new ApiError(401, "new password and confirm password does not match")
   }

   const user = await User.findById(req.user?._id)
   const isPasswordCorrect = await user.isPasswordCorrect(password)

   console.log(isPasswordCorrect, "  ===============>");
   if (!isPasswordCorrect) {
      throw new ApiError(400, "invalid old password")
   }

   user.password = newPassword

   await user.save({ validateBeforeSave: false })

   return res.status(200)
      .json(new ApiResponse(200, {}, 'password change successfully'))

})


const updateAccountDetails = asyncHandler(async (req, res) => {
   const { userName, email } = req.body

   if (!userName || !email) {
      throw new ApiError(400, "All fields are required")
   }

   console.log( "data nhi mil rha hai" , "==============>");
   const user = await User.findByIdAndUpdate(req.user?._id,
      {
         $set: {
            username: userName,
            email:email
         },

      },
      {
         new: true
      },
   ).select("-password")

   if(!user){
         console.log("data nhi milga");
   }


   return res.status(200)
      .json(
         new ApiResponse(200, user, "details updated")
      )
})




export {
   registerUser,
   loginUser,
   logoutUser,
   getCurrentUser,
   changePassword,
   updateAccountDetails

}