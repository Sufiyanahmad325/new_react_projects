import dotenv from 'dotenv'
import connectDB from './Db/DBindex.js'

import app from './app.js'


dotenv.config({path:"./.env"})


connectDB().then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>console.log(`server is runnig at port : ${process.env.PORT}`))
}).catch((error)=>{
    console.log('MONGODB connection failed !!! ' , error);
})