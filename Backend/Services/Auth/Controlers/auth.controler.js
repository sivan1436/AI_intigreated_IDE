import { app } from "../Config/Firebase.js";
import { getAuth } from "firebase-admin/auth";
import User from "../Models/UserModel.js";
import crypto from "crypto";
import redis from "../../../Shared/redis.js";



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
            const currentUser = {
                name : user.name,
                userId: user._id,
                email: user.email,
                avatar: user.avatar
            }

        res.cookie("session",currentUser, {
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