const Product = require("../../models/Product")
const convert = require("../../utils/convert")
const kaveNegar = require("../../utils/kaveNegar")

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

    if(findProduct.status != req.body.status) await kaveNegar.sms(findProduct.phone, "order", findProduct.name, req.body.status)

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