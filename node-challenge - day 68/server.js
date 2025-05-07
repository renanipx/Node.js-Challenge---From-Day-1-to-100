const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files or APIs
app.get('/', (req, res) => {
  res.send('WebSocket server is running');
});

// WebSocket logic
wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);

    // Echo back to client
    ws.send(`Server received: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client has disconnected');
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
