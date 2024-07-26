import mongoose from "mongoose";


export const DbConnection =async()=>{

    try {
        let connectionInstance = await mongoose.connect(
            process.env.MONGODB_URL)
            console.log(`\n MONGODB connection !! DB Host ==> : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(error.message)
        exit(1)
    }
} 
