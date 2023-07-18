const xmpp = require("simple-xmpp");
//hussein
xmpp.on ("online", data => {
    console.log("Hey you are online! ")
    console.log(`Connected as ${data.jid.user}`)
    send();
})

function send () {
    xmpp.send("admin@localhost", `hi! ${Date.now()}`)
}
xmpp.on("error", error => 
    console.log(`something went wrong!${error} `))

xmpp.on("chat", (from, message)=>{
    console.log(`Got a message! ${message}`);
    const prompt = require('prompt-sync')();
    const msg = prompt('Your Message: ');
    xmpp.send(from,msg)
})

xmpp.connect({
    "jid": "user@localhost",
    "password": "password",
    "host": "localhost",
    "port": 5222
})

