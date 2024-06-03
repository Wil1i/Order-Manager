const db = require("../configs/db")
const {DataTypes} = require("sequelize")

const Products = db.define("products", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    title : {
        type : DataTypes.TEXT
    },

    phone : {
        type : DataTypes.TEXT
    },

    name : {
        type : DataTypes.TEXT
    },

    price : {
        type : DataTypes.INTEGER
    },

    status : {
        type : DataTypes.TEXT
    }
})

Products.sync()

module.exports = Products