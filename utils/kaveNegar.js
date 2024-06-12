const config = require("../configs/config.json")
const axios = require("axios")

const sms = async (number, template, name, status) => {
    if(status && status != ""){

        await axios.post(`https://api.kavenegar.com/v1/${config.apiKey}/verify/lookup.json?receptor=${number}&token=${name}&token2=${status}&template=${template}`).then(res => {
            return res.data
        })

    }else{

        await axios.post(`https://api.kavenegar.com/v1/${config.apiKey}/verify/lookup.json?receptor=${number}&token=${name}&template=${template}`).then(res => {
            return res.data
        })

    }
}

const info = async () => {
    await axios.get(`https://api.kavenegar.com/v1/${config.apiKey}/account/info.json`).then(res => {
        return res.data
    })
}

module.exports = {
    sms,
    info
}