import redis from "../../Shared/redis.js";

export async function Protect(req, res, next) {
    try {
        const sessionId = req.cookies?.sessionId;

        if (!sessionId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const result = await redis.get(`session-${sessionId}`);

        if (!result) {
            return res.status(401).json({ message: "Session Expired" });
        }

        req.user = JSON.parse(result);
        return next();
    } catch (err) {
        return res.status(500).json({ message: "Unauthorized"});
    }
}
