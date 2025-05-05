function customMiddleware(req, res, next) {
    console.log(`[${new Date().toISOString()}] Incoming Request: ${req.method} ${req.url}`);
    
    // Example: Simple Auth check (for demonstration)
    const token = req.headers['authorization'];
    if (!token || token !== 'Bearer mysecrettoken') {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    next();
  }
  
  module.exports = customMiddleware;
  