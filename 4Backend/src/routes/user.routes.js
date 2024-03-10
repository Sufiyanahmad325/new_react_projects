import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { changePassword, getCurrentUser, loginUser, logoutUser, registerUser, updateAccountDetails } from "../controller/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()



router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)


router.route('/login').post(loginUser)

router.route('/logout').post(verifyJWT, logoutUser)

router.route('/getuser').get(verifyJWT, getCurrentUser)

router.route('/changePassword').post(verifyJWT, changePassword)

router.route('/update-account').post(verifyJWT, updateAccountDetails)




export default router