import Redis from "ioredis";
import dotenv from "dotenv"
// dotenv.config({ path: "../../.env" });
dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
  maxRetriesPerRequest: null,
});


// await redis.set("foo", "bar");

