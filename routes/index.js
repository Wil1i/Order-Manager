let {Router} = require("express")
const { isUserNotLoggedIn, isUserLoggedIn, isUserAdmin, isUserDeveloper } = require("../middlewares/auth")
Router = new Router()

const loginController = require("../controllers/loginController");
Router.get("/login", isUserNotLoggedIn, loginController.get);
Router.post(
  "/login",
  isUserNotLoggedIn,
  loginController.post,
  loginController.func
);
Router.post("/logout", loginController.logout)

const homeController = require("../controllers/homeController")
Router.get("/", isUserLoggedIn, homeController.get)

module.exports = Router
