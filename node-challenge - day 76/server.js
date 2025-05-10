const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files from public directory
app.use(express.static('public'));

// Analytics data store
const analytics = {
    totalVisits: 0,
    uniqueVisitors: new Set(),
    pageViews: {},
    activeUsers: new Set()
};

// WebSocket connection handling
wss.on('connection', (ws) => {
    const visitorId = uuidv4();
    analytics.activeUsers.add(visitorId);

    // Send initial analytics data
    ws.send(JSON.stringify({
        type: 'analytics',
        data: {
            totalVisits: analytics.totalVisits,
            uniqueVisitors: analytics.uniqueVisitors.size,
            pageViews: analytics.pageViews,
            activeUsers: analytics.activeUsers.size
        }
    }));

    ws.on('message', (message) => {
        const data = JSON.parse(message);
        
        if (data.type === 'pageView') {
            // Update analytics
            analytics.totalVisits++;
            analytics.uniqueVisitors.add(visitorId);
            analytics.pageViews[data.page] = (analytics.pageViews[data.page] || 0) + 1;

            // Broadcast updated analytics to all connected clients
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({
                        type: 'analytics',
                        data: {
                            totalVisits: analytics.totalVisits,
                            uniqueVisitors: analytics.uniqueVisitors.size,
                            pageViews: analytics.pageViews,
                            activeUsers: analytics.activeUsers.size
                        }
                    }));
                }
            });
        }
    });

    ws.on('close', () => {
        analytics.activeUsers.delete(visitorId);
    });
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 