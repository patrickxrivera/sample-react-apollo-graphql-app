const getPeerCircles = (root, args, ctx, info) => ctx.db.query.peerCircles({}, info);

const getPeerCircle = (root, { id }, ctx, info) => ctx.db.query.peerCircle({ where: { id } }, info);

module.exports = {
  getPeerCircles,
  getPeerCircle
};
