const db = require("../configs/db")
const Product = require("./Product")
const {DataTypes} = require("sequelize")

const Error = db.define("errors", {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },

    productId : {
        type : DataTypes.INTEGER
    },

    errId : {
        type : DataTypes.INTEGER
    },

    text : {
        type : DataTypes.TEXT
    }
})

Error.sync()

// Product.hasMany(Product)
// Error.belongsTo(Product, {
//     foreignKey : "id",
//     as : "product"
// })

module.exports = Error