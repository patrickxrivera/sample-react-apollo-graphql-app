const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET } = require('../../utils');

const signup = async (root, { password, ...rest }, ctx, info) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await ctx.db.mutation.createUser(
    {
      data: { ...rest, password: hashedPassword }
    },
    `{ id  }`
  );

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user
  };
};

const login = async (root, { email, password }, ctx, info) => {
  const user = await ctx.db.query.user({ where: { email } }, `{ id password}`);

  if (!user) {
    throw new Error('No such user found.');
  }

  const isValidUser = await bcrypt.compare(password, user.password);

  if (!isValidUser) {
    throw new Error('Invalid password.');
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user
  };
};

module.exports = {
  signup,
  login
};
