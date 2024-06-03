const db = require("../configs/db")
const {DataTypes} = require("sequelize")

const Setting = db.define("settings", {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },

    name : {
        type : DataTypes.TEXT
    },

    value : {
        type : DataTypes.TEXT
    },

    updatedBy : {
        type : DataTypes.TEXT
    }
})

Setting.sync()

module.exports = Setting