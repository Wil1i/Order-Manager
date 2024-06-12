const User = require("../models/User")
const config = require("../configs/config.json")
const pwd = require("./password")

const checkUser = async () => {
    await User.sync()
    const users = await User.findAll()
    if(!users || !users[0]){
        const password = await pwd.encrypt(config.adminPassword)
        await User.create({
            username : config.adminUsername,
            password,
            rank : "developer",
            createdBy : "سیستم"
        })
        console.log(`---------- ADMIN USER CREATED ----------\nUsername: ${config.adminUsername}\nPassword : ${config.adminPassword}\n---------- ADMIN USER CREATED ----------`)
    }else{console.log(`---------- ADMIN USER EXIST ----------`)}
}

module.exports = checkUser