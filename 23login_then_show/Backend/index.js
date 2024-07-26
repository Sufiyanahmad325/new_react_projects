import express from 'express'
import dotenv from 'dotenv'
import { DbConnection } from './DbConnection.js/connection.js'
const app = express()


dotenv.config({path:'./.env'})

DbConnection().then(()=>{

})