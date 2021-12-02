const { Auction, User } = require('../../models');
const boomify = require('../../utils');

const getAuction = async (req, res) => {
  const { id } = req.params;

  try {
    if (id <= 0) { throw boomify(400, 'Bad Request', 'Bad Request'); }
    const data = await Auction.findAll({
      include: { model: User, as: 'user' },
      where: {
        product_id: id,
      },

    });
    res.json({
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAuction };
