const Product = require("../../models/Product")
const Setting = require("../../models/Setting")
const convert = require("../../utils/convert")
const axios = require("axios")
const config = require("../../configs/config.json")

const get = async (req, res) => {
    const findProduct = await Product.findByPk(req.params.id)

    if(!findProduct) {
        req.flash("error", "سفارش مورد نظر یافت نشد.")
        return res.redirect(`/products/${req.params.id}`)
    }

    if(req.query.action == "delete"){
        await findProduct.destroy()
        return res.redirect("/orders")
    }

    res.render("products/single", {
        flash : req.flash(),
        user : req.user,
        product : findProduct,
        convert,
    })
}

const post = async (req, res) => {
    if(!req.query.action == "edit") return res.redirect("/orders")

    const findProduct = await Product.findByPk(req.params.id)
    
    if(!findProduct) {
        req.flash("error", "محصول مورد نظر یافت نشد.")
        return res.redirect("/orders")
    }

    await findProduct.update({
        title : req.body.title,
        name : req.body.name,
        phone : req.body.phone,
        price : req.body.price,
        status : req.body.status
    })

    req.flash("success", "محصول مورد نظر با موفقیت ویرایش شد.")
    return res.redirect(`/products/${req.params.id}?action=edit`)
}

module.exports = {
    get,
    post
}