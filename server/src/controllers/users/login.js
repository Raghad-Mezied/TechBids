const bcrypt = require('bcrypt');
const { signTokenPromise, boomify } = require('../../utils/index');
const { User } = require('./index');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { user } = await User.findOne({ where: { email } });
    if (!user.length) {
      throw (boomify(400, 'Login Error', 'invalid email or password'));
    }
    const compared = await bcrypt.compare(password, user[0].password);
    if (!compared) {
      throw (boomify(400, 'Login Error', 'invalid email or password'));
    }
    const token = await signTokenPromise(user[0].id, user[0].name, user[0].isAuth);
    res.cookie('token', token);
    return res.json({
      message: 'logged in successfully',
      user: {
        id: user[0].id,
        name: user[0].name,
        isAdmin: user[0].is_admin,
      },
    });
  } catch (err) {
    if (err.details) {
      res.status(400).json({
        msg: err.details[0].message,
        status: 400,
      });
    } else {
      return next(err);
    }
  }
};
module.exports = { login };
