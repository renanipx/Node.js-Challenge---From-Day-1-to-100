require("dotenv").config();
const NodeCache = require("node-cache");

const ttl = parseInt(process.env.CACHE_TTL) || 60;
const cache = new NodeCache({ stdTTL: ttl, checkperiod: ttl * 1.5 });

module.exports = cache;
