require("dotenv").config();
const express = require("express");
const cache = require("./cache");
const redisRoutes = require("./routeRedis");

const app = express();
const port = process.env.PORT || 3000;

app.get("/memory-data", async (req, res) => {
  const key = "memoryDataKey";

  const cachedData = cache.get(key);
  if (cachedData) {
    console.log("Memory cache hit");
    return res.json({ source: "memory", data: cachedData });
  }

  console.log("Memory cache miss");
  const data = await new Promise((r) => setTimeout(() => r({ message: "Fresh memory data!" }), 2000));

  cache.set(key, data);
  res.json({ source: "api", data });
});

app.use("/", redisRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
