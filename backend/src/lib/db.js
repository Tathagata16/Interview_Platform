import mongoose from "mongoose";
import { ENV } from "./env.js";
export const connectDb = async ()=>{
    try{
        const conn = await mongoose.connect(ENV.DB_URL);
        console.log("connected to db ✅",conn.connection.host);
    }catch(error){
        console.log("error: ", error);
        process.exit(1);
    }
}