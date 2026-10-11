import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import dns from "node:dns";
import ConnectDB from "./Config/db.js";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config()

const port = process.env.AUTH_PORT || 3000;
const app = express()


await ConnectDB();
app.get('/', (req, res) => {
    res.json({'message': 'Hello World! from Auth Service'})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})