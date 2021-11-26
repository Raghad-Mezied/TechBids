const joi = require('joi');

console.log('aaaaaaaaaaaaaaaaaaaaaaaaa');

const signInValidation = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

module.exports = { signInValidation };
