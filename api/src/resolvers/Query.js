const getPeerCircles = (root, args, ctx, info) => ctx.db.query.peerCircles({}, info);

const getPeerCircle = (root, { id }, ctx, info) => ctx.db.query.peerCircle({ where: { id } }, info);

const getUsers = (root, args, ctx, info) => ctx.db.query.users({}, info);

const getUser = (root, { id }, ctx, info) => ctx.db.query.user({ where: { id } }, info);

module.exports = {
  getPeerCircles,
  getPeerCircle,
  getUsers,
  getUser
};
