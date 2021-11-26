/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');
const { User } = require('../../models');
const { signInValidation } = require('..');

const { boomify, signTokenPromise } = require('../../utils');

const signIn = async (res, req, next) => {
  try {
    const { password, email } = req.body;
  } catch (err) {
    return next(err);
  }
};

module.exports = { signIn };
