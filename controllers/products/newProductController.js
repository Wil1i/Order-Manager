const Product = require("../../models/Product")
const config = require("../../configs/config.json")
const convert = require("../../utils/convert")
const kavenegar = require("../../utils/kaveNegar")

const get = (req, res) => {
	res.render("products/newProduct", {
        user : req.user,
        flash : req.flash()
    })
}

const post = async (req, res) => {
    await Product.create({
        name : req.body.name,
        title : req.body.title,
        price : req.body.price,
        status : req.body.status,
        phone : req.body.number
    })

    req.flash("success", "سفارش جدید با موفقیت ساخته شد.")

    await kavenegar.sms(req.body.number, "submitOrder", req.body.name, "")

    return res.redirect("/orders")
}

module.exports = {
	get,
	post
}
