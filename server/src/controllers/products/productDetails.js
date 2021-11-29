const { Product } = require('../../models/index');
const boomify = require('../../utils/index');

const productDetails = async (req, res) => {
  const { id } = req.params;

  try {
    if (id <= 0) { throw boomify(400, 'Bad Request', 'Bad Request'); }
    const data = await Product.findByPk(id);

    res.json({
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { productDetails };
