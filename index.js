import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./src/config/db.connection.js";
import { startApp } from "./src/config/connectBot.js";

dotenv.config();
const server = express();
const port = process.env.PORT || "5000";

connectDb();
startApp();

server.listen(port, ()=>{
    console.log(`Server Is Running at ${port}`);
})