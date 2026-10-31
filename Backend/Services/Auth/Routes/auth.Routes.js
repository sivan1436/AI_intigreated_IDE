import express from "express";
import { login, LogOut } from "../Controlers/auth.controler.js";


const Authrouter = express.Router();


Authrouter.post("/login", login);
Authrouter.post("/logout", LogOut)

export default Authrouter;