import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL || "redis://127.0.0.1:6379", {
    maxRetriesPerRequest: 1,
    retryStrategy: (attempt) => attempt <= 3 ? attempt * 1000 : null
});

redis.on("connect", () => {
    console.log("Redis connected");
});

redis.on("error", (error) => {
    console.error(`Redis connection error: ${error.message}`);
});

export default redis
