let {Router} = require("express")
const { isUserLoggedIn, isUserAdmin } = require("../middlewares/auth")
Router = new Router()

const usersController = require("../controllers/usersController")
Router.get("/", isUserLoggedIn, isUserAdmin, usersController.get)
Router.post("/", isUserLoggedIn, isUserAdmin, usersController.post)

const singleUserController = require("../controllers/singleUserController")
Router.get("/:id", isUserLoggedIn, isUserAdmin, singleUserController.get)
Router.post("/:id", isUserLoggedIn, isUserAdmin, singleUserController.post)

module.exports = Router