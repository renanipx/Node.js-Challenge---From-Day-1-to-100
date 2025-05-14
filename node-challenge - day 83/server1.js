const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { createAdapter } = require('@socket.io/redis-adapter');
const { createClient } = require('ioredis');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const pubClient = createClient(); // auto-connects
const subClient = pubClient.duplicate(); // also auto-connects

pubClient.on('error', console.error);
subClient.on('error', console.error);

// Wait for Redis clients to be ready before using adapter
Promise.all([
  new Promise((resolve) => pubClient.once('ready', resolve)),
  new Promise((resolve) => subClient.once('ready', resolve))
]).then(() => {
  io.adapter(createAdapter(pubClient, subClient));

  io.on('connection', (socket) => {
    console.log('User connected to server 1');

    socket.on('chat message', (msg) => {
      io.emit('chat message', `[Server1] ${msg}`);
    });
  });

  app.use(express.static('public'));

  server.listen(3000, () => {
    console.log('Server 1 listening on http://localhost:3000');
  });
});
