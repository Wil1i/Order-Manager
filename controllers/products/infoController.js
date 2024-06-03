const Product = require("../../models/Product")
const convert = require("../../utils/convert")

const get = async (req, res) => {
    if(!req.query.id) return res.redirect("https://google.com")

    const findProduct = await Product.findByPk(req.query.id)
    
    res.render("products/info", {
        product : findProduct,
        convert
    })
}

module.exports = {
    get
}