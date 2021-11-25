const { verifyTokenPromise } = require('../../utils');

const isAuth = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    const userToken = await verifyTokenPromise(token);
    req.user = userToken;
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = { isAuth };
