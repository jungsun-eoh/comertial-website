module.exports = {
  apps: [
    {
      name: 'gateway',
      script: './server/gateway.js',
      watch: true,
    },
    {
      name: 'websocket',
      script: './server/websocket.js',
      watch: true,
      ignore_watch: ['node_modules'],
    },
    {
      name: 'listings',
      script: './server/listings.js',
      watch: true,
      ignore_watch: ['node_modules'],
    },
    {
      name: 'messanger',
      script: './server/messanger.js',
      watch: true,
      ignore_watch: ['node_modules'],
    },
    {
      name: 'authenticate',
      script: './server/authenticate.js',
      watch: true,
      ignore_watch: ['node_modules'],
    },
  ],
};
