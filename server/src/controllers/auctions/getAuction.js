const { Auction } = require('../../models');
const boomify = require('../../utils');

const getAuction = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (id <= 0) { throw boomify(400, 'Bad Request', 'Bad Request'); }
    const data = await Auction.findByPk(id);
    res.json({
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAuction };
