import express from "express";
import { login } from "../Controlers/auth.controler.js";


const Authrouter = express.Router();


Authrouter.post("/login", login);

export default Authrouter;