const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { createAdapter } = require('@socket.io/redis-adapter');
const { createClient } = require('ioredis');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const pubClient = createClient(); // ioredis auto-connects
const subClient = pubClient.duplicate(); // creates a second connection

pubClient.on('error', console.error);
subClient.on('error', console.error);

// Wait until both Redis clients are ready
Promise.all([
  new Promise((resolve) => pubClient.once('ready', resolve)),
  new Promise((resolve) => subClient.once('ready', resolve))
]).then(() => {
  io.adapter(createAdapter(pubClient, subClient));

  io.on('connection', (socket) => {
    console.log('User connected to server 2');

    socket.on('chat message', (msg) => {
      io.emit('chat message', `[Server2] ${msg}`);
    });
  });

  app.use(express.static('public'));

  server.listen(3001, () => {
    console.log('Server 2 listening on http://localhost:3001');
  });
});
