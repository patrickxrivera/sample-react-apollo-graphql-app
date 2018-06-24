const { getUserId } = require('../../utils');

const getThreadsByPeerCircleId = (root, { id }, ctx, info) =>
  ctx.db.query.peerCircle({ where: { id } }, info);

module.exports = {
  getThreadsByPeerCircleId
};
