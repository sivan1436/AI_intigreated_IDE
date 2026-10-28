import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import proxy from "express-http-proxy";
import { Protect } from "./Middleware/Protect.js";
import { getCurrentUser } from "./Controlers/user.controler.js";
import { ProxyWithHeader } from "./Utils/proxyWithHeader.js";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(morgan('dev'));
app.use('/auth', proxy(process.env.AUTH_SERVICE_URL));
app.use('/project', Protect, ProxyWithHeader(process.env.PROJECT_SERVICE_URL));
app.get('/me', Protect, getCurrentUser);
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});