const { Op } = require('sequelize');
const { Product, Auction } = require('../../models');
const { filterProductsSchema } = require('../validations');
const { boomify } = require('../../utils');

module.exports = async (req, res, next) => {
  try {
    const {
      search,
      minPrice = 0,
      maxPrice,
      categoryId,
      status,
      page = 1,
    } = req.query;

    let isOpen;
    if (status === 'open') {
      isOpen = true;
    } else if (status === 'ended') {
      isOpen = false;
    } else {
      isOpen = status;
    }

    await filterProductsSchema.validateAsync({
      search,
      minPrice,
      maxPrice,
      categoryId,
      isOpen,
      page,
    });

    const productData = await Product.findAll({
      attributes: ['id', 'name', 'description', 'is_open', 'image', 'auc_end_date'],
      offset: (page - 1) * 6,
      include: {
        model: Auction,
        as: 'auction',
        order: [
          ['id', 'DESC'],
        ],
        limit: 1,
        attributes: ['amount'],
        where: maxPrice && {
          amount: {
            [Op.between]: [minPrice, maxPrice],
          },
        },
      },
      where: {
        [Op.and]: [
          search && {
            [Op.or]: [
              {
                name: {
                  // [Op.like]: sequelize.fn('lower', `%${search}%`),
                  [Op.like]: `%${search}%`,
                },
              },
              {
                description: {
                  [Op.like]: `%${search}%`,
                },
              },
            ],
          },
          isOpen !== undefined && { is_open: isOpen },
          categoryId !== undefined && { category_id: categoryId },
        ],
      },
    });

    const data = productData.filter((elm) => elm.auction.length !== 0);
    res.json({ data });
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(boomify(400, err.details[0].message, 'Bad Request'));
    } else {
      next(err);
    }
  }
};

// start amount no bids - isOpen
