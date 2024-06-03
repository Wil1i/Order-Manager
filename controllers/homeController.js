const Product = require("../models/Product")
const User = require("../models/User")
const convert = require("../utils/convert")
const Error = require("../models/Error")

const get = async (req, res) => {
    const products = await Product.findAll()
    const users = await User.findAll()
    // const errors = await Error.findAll({include : ['product']})

    res.render("home", {
        products,
        users,
        convert,
        errors : {},
        user : req.user,
        flash : req.flash()
    })
}

module.exports = {
    get
}