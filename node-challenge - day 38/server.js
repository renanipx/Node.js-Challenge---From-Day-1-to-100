require('dotenv').config(); // Load variables from .env

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const FILE_NAME = process.env.FILE_NAME || '';

const server = http.createServer((req, res) => {
  if (req.url === '/file') {
    const filePath = path.join(__dirname, 'files', FILE_NAME);
    const readStream = fs.createReadStream(filePath);

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    readStream.pipe(res);

    readStream.on('error', (err) => {
      res.writeHead(500);
      res.end('Internal Server Error');
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
