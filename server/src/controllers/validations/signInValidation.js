const joi = require('joi');

const signInValidation = joi.object({
  email: joi.string().email().require(),
  password: joi.string().password().require,
});

module.export = { signInValidation };
