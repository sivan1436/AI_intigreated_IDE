import { app } from "../Config/Firebase.js";
import { getAuth } from "firebase-admin/auth";



export async function login(req, res) {
    try{
        const { token } = req.body;
        const decodedToken = await getAuth(app).verifyIdToken(token);
        
    }
    catch(err){
        console.error(err);
    }
}