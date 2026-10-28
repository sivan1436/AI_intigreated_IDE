import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./Config/db.js";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();


await ConnectDB();

const port = process.env.PORT || 3000;
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    res.json({'message': 'Hello World! from Project Service'})
})

app.listen(port, () => {
    console.log(`Project Server  is running on port ${port}`)
})