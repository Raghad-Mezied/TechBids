const { Category } = require('../../models');

module.exports = async (req, res, next) => {
  try {
    const categoriesData = await Category.findAll({
      attributes: ['id', 'name'],
    });
    res.json({ categoriesData });
    console.log('cat', { categoriesData });
  } catch (err) {
    next(err);
  }
};
