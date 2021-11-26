const { verifyTokenPromise } = require('../../utils');
const { boomify } = require('../../utils/index');

const isAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    try {
      const userToken = await verifyTokenPromise(token);
      req.user = userToken;
      return next();
    } catch (err) {
      return next(err);
    }
  } else {
    throw boomify(401, 'Unauthorized', 'You need to login or sign up');
  }
};

module.exports = { isAuth };
