const User = require("../models/User")
const pwd = require("../utils/password")

const get = async (req, res) => {
    const findUser = await User.findByPk(req.params.id)

    if(!findUser) {
        req.flash("error", "کاربر مورد نظر یافت نشد.")
        return res.redirect("/users")
    }

    if(req.query.action == "delete"){
        await findUser.destroy()
        req.flash("success", "کاربر مورد نظر با موفقیت حذف گردید.")
        res.redirect("/users")
    }

    res.render("singleUser", {
        flash : req.flash(),
        user : req.user,
        findUser,
        edit : req.query.action == "edit"
    })
}

const post = async (req, res) => {
    if(!req.query.action == "edit") return res.redirect("/users")

    const findUser = await User.findByPk(req.params.id)

    if(!findUser) {
        req.flash("error", "کاربر مورد نظر یافت نشد.")
        return res.redirect("/users")
    }

    if(req.body.password != req.body.repeatPassword) req.body.password = findUser.password
    await findUser.update({
        username : (req.body.username && req.body.username != "") ? req.body.username || findUser.username : findUser.username,
        password : (req.body.password && req.body.password != "") ? await pwd.encrypt(req.body.password) || findUser.password : findUser.password,
        rank : (req.body.rank && req.body.rank != "اشتباه") ? req.body.rank || findUser.rank : findUser.rank, 
    })

    req.flash("success", "کاربر مورد نظر ویرایش شد.")
    res.redirect(`/users/${req.params.id}`)
}

module.exports = {
    get,
    post
}