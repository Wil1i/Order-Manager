const Product = require("../../models/Product")
const convert = require("../../utils/convert")

const get = async (req, res) => {
    let products;
    let active = req.query.filter || "products";

    products = await Product.findAll()
    res.render("products/products", {
        products,
        convert,
        active,
        user : req.user,
        flash : req.flash()
    })
}

module.exports = {
    get
}