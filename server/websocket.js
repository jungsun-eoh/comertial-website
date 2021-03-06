const WebSocket = require('ws');
const redis = require('redis');
const client = redis.createClient({
  host: process.env.REDIS_HOST || 'localhost',
});

const wss = new WebSocket.Server({ port: 4004 });

const broadcast = (obj) => {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(obj));
  });
};

wss.on('connection', (ws) => {
  console.log('Someone has connected');

  broadcast({
    type: 'SET_USER_COUNT',
    count: wss.clients.size,
  });

  ws.on('close', () => {
    console.log('disconnected');
    broadcast({
      type: 'SET_USER_COUNT',
      count: wss.clients.size,
    });
  });
});

client.on('message', (channel, message) => {
  console.log(`subscriber hears message ${message}`);
  wss.clients.forEach((client) => {
    client.send(message);
  });
});

client.subscribe('testPublish');
console.log('Server online');
