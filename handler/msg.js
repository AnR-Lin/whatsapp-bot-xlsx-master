const data = require('./excel')

module.exports = handler = async(client, message) => {
    try {
        const {id, sender, from, chat} = message
        let { body } = message

        for(i in data.pesan) {
            if(body === data.pesan[i].messages) {
                await client.sendText(from, data.pesan[i].reply)
            }
        }
    } catch(error) {
        console.log(error)
    }
}