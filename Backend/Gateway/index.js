import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

dotenv.config()

const port = process.env.PORT || 3000;
const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.json({'message': 'Hello World!'})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})