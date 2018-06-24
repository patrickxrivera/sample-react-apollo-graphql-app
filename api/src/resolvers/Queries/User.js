const { getUserId } = require('../../utils');

const getUsers = (root, args, ctx, info) => ctx.db.query.users({}, info);

const getUserById = (root, { id }, ctx, info) => {
  const userId = getUserId(ctx);

  return ctx.db.query.user({ where: { id: userId } }, info);
};

module.exports = {
  getUsers,
  getUserById
};
