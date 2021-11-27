/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');
const { User } = require('../../models');
const { signInValidation } = require('../validations');

const { boomify, signTokenPromise } = require('../../utils');

const signIn = async (req, res, next) => {
  try {
    const jane = await User.create({ name: 'Ahmed', email: 'ahmed@gmail.com', password: '$2a$10$94OU9U7iXIg40LkRkr/j.usaygbitLkPvs6NUrcS7WsuBrup5b7/y' });

    const { email, password } = req.body;
    console.log('req.body', req.body);
    await signInValidation.validateAsync({ email, password });
  } catch (err) {
    return next(err);
  }
};

module.exports = { signIn };
