const express = require("express");
const redisClient = require("./redisClient");
require("dotenv").config();

const router = express.Router();

router.get("/redis-data", async (req, res) => {
  const key = "redisDataKey";

  try {
    const cached = await redisClient.get(key);
    if (cached) {
      console.log("Redis cache hit");
      return res.json({ source: "redis", data: JSON.parse(cached) });
    }

    console.log("Redis cache miss");
    const data = await slowFetchFunction();

    await redisClient.setEx(key, parseInt(process.env.REDIS_TTL), JSON.stringify(data));

    res.json({ source: "api", data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Redis error" });
  }
});

const slowFetchFunction = () =>
  new Promise((resolve) => setTimeout(() => resolve({ message: "Fresh Redis data!" }), 2000));

module.exports = router;
