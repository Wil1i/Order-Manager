const sequelize = require("sequelize")
const config = require("./config.json")

const db = new sequelize(
    config.db.name,
    config.db.username,
    config.db.password,
    {
        host: config.db.host,
        dialect: "mysql"
    }
)

try {
    db.authenticate()
    console.log(`---------- DataBase connected [ ${config.db.name} ] ----------`)
} catch (error) {
    console.log(error)
}

module.exports = db