const wa = require('@open-wa/wa-automate');
const msg = require('./handler/msg')

wa.create().then(client => start(client));

function start(client) {
    client.onMessage(async message => {
        msg(client,message)
    });
}