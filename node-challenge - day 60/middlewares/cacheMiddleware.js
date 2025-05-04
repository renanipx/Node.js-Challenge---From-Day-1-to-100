const cacheMiddleware = (req, res, next) => {
    if (req.method === 'GET') {
      res.set('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    }
    next();
  };
  
  module.exports = cacheMiddleware;
  