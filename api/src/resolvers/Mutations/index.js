const Auth = require('./Auth');
const PeerCircle = require('./PeerCircle');
const Thread = require('./Thread');
const Comment = require('./Comment');

module.exports = {
  ...Auth,
  ...PeerCircle,
  ...Thread,
  ...Comment
};
