const WebSocket = require('ws');
const redis = require('redis');
const http = require('http');

const redisClient = redis.createClient({ url: 'redis://127.0.0.1:6379' });
const redisPublisher = redisClient.duplicate();
const redisSubscriber = redisClient.duplicate();

const server = http.createServer();
const wss = new WebSocket.Server({ server });

(async () => {
  await redisClient.connect();
  await redisPublisher.connect();
  await redisSubscriber.connect();

  wss.on('connection', (ws) => {
    console.log('WebSocket conectado');

    ws.on('message', (message) => {
      const text = message.toString();
      console.log('Mensagem recebida:', text);
      redisPublisher.publish('chat-channel', text);
    });

    redisSubscriber.subscribe('chat-channel', (message) => {
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    });
  });

  server.listen(8080, () => {
    console.log('Servidor WebSocket rodando em ws://localhost:8080');
  });
})();
