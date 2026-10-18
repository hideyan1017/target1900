const { PeerServer } = require('peer');
const PORT = process.env.PORT || 9000;

const peerServer = PeerServer({
  port: PORT,
  path: '/'
});

console.log(`PeerJS server running on port ${PORT}`);
