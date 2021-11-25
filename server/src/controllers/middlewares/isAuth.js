const { verifyTokenPromise } = require('../../utils');

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
    res.json({ msg: 'you need to sign in ' });
  }
};

module.exports = { isAuth };
