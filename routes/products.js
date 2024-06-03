let {Router} = require("express")
const { isUserLoggedIn, isUserAdmin } = require("../middlewares/auth")
Router = new Router()

const newProductController = require("../controllers/products/newProductController")
Router.get("/new", isUserLoggedIn, isUserAdmin, newProductController.get)
Router.post("/new", isUserLoggedIn, isUserAdmin, newProductController.post)

const infoController = require("../controllers/products/infoController")
Router.get("/info", infoController.get)

const singleProductController = require("../controllers/products/singleProductController")
Router.get("/:id", isUserLoggedIn, isUserAdmin, singleProductController.get)
Router.post("/:id", isUserLoggedIn, isUserAdmin, singleProductController.post)

const productsController = require("../controllers/products/productsController")
Router.get("/", isUserLoggedIn, isUserAdmin, productsController.get)

module.exports = Router