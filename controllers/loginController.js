const passport = require("passport")

const get = (req, res) => {
    res.render("login", {
        flash : req.flash(),
        user : req.user
    })
}

const post = passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
    session: true,
});

const func = (req, res) => {
    var redirectTo = req.session.redirectURL || "/";
    res.redirect(redirectTo);
};

const logout = (req, res) => {
    req.logout(err => {
        res.redirect("/login")
    })
}

module.exports = {
    get,
    post,
    func,
    logout
}