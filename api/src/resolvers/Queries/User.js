const getUsers = (root, args, ctx, info) => ctx.db.query.users({}, info);

const getUser = (root, { id }, ctx, info) => ctx.db.query.user({ where: { id } }, info);

module.exports = {
  getUsers,
  getUser
};
