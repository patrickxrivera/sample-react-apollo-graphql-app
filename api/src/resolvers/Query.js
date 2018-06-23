const getPeerCircles = (root, args, ctx, info) => ctx.db.query.peerCircles({}, info);

const getUsers = (root, args, ctx, info) => ctx.db.query.users({}, info);

module.exports = {
  getPeerCircles,
  getUsers
};
