const http = require('http');
const path = require('path');
const fs = require('fs');
const { PORT } = require('./config');
const setupWebSocket = require('./websocket');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'index.html'); 
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

setupWebSocket(server);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
