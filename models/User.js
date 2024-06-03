const db = require("../configs/db")
const {DataTypes} = require("sequelize")

const User = db.define("users", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    username : {
        type : DataTypes.TEXT,
    },

    password : {
        type : DataTypes.TEXT
    },

    rank : {
        type : DataTypes.TEXT
    },

    createdBy : {
        type : DataTypes.TEXT
    }
})

User.sync()

module.exports = User