const User = require('./User');
const PeerCircle = require('./PeerCircle');

module.exports = {
  ...User,
  ...PeerCircle
};
