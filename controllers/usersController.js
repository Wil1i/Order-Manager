const User = require("../models/User")
const bcrypt = require("../utils/password")

const get = async (req, res) => {
    const users = await User.findAll()

    res.render("users", {
        flash : req.flash(),
        users,
        user : req.user
    })
}

const post = async (req, res) => {
    if(req.body.password != req.body['repeat-password']) {
        req.flash("error", "کلمه عبور با تکرار آن یکسان نمی‌باشد!")
        return res.redirect("/users")
    }

    const isUsernameInvalid = await User.findOne({where : {
        username : req.body.username
    }})

    if(isUsernameInvalid){
        req.flash("error", "نام کاربری تکراری می‌باشد!")
        return res.redirect("/users")
    }

    await User.create({
        username : req.body.username,
        createdBy : req.user?.username || 'سیستم',
        password : await bcrypt.encrypt(req.body.password),
        rank : req.body.rank
    })

    req.flash("success", "کاربر جدید اضافه شد.")
    return res.redirect("/users")
}

module.exports = {
    get,
    post
}