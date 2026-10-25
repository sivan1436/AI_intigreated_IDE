import { app } from "../Config/Firebase.js";
import { getAuth } from "firebase-admin/auth";
import User from "../../User/Models/User.js";
import crypto from "crypto";
import redis from "../../Config/Redis.js";



export async function login(req, res) {
    try {
        const { token } = req.body;
        const decoded = await getAuth(app).verifyIdToken(token);

        let user = await User.findOne({
            firebaseUid: decoded.uid
        })
        if (!user) {
            user = await User.create({
                firebaseUid: decoded.uid,
                email: decoded.email,
                name: decoded.name,
                avatar: decoded.picture
            });
        }
        const sessionID = crypto.randomUUID();
        await redis.set(`session-${sessionID}`,
            JSON.stringify({
                name: user.name,
                userId: user._id,
                email: user.email,
                avatar: user.avatar
            }), "EX", 7 * 24 * 60 * 60)

        res.cookie("session", sessionID, {
            httpOnly: true,
            secure: false,
            samesite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({ decoded });

    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            error: "Internal Server Error",
            err: err
        });
    }
}

export async function LogOut(req, res) {
    try {
        const sessionId = req.cookies?.session
        await redis.del(`session-${sessionId}`)
        res.clearCookie("session");
        return res.status(200).json({ message: "Logged out successfully" });
    }
    catch (error) {
         res.status(500).json({ error: "Internal Server Error", err: error });  
    }
} 