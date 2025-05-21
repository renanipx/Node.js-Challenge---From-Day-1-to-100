import express from 'express';
import client from 'prom-client';

const app = express();
const port = 3000;

// Register default metrics
client.collectDefaultMetrics();

// Custom metric: count HTTP requests
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

// Middleware to count requests
app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestCounter.inc({
      method: req.method,
      route: req.route?.path || req.path,
      status: res.statusCode,
    });
  });
  next();
});

// Simple endpoint
app.get('/', (req, res) => {
  res.send('Hello, Prometheus!');
});

// Expose metrics at /metrics
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
  console.log(`📊 Metrics available at http://localhost:${port}/metrics`);
});
