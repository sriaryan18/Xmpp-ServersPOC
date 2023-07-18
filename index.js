var xmpp = require('simple-xmpp');

xmpp.on('online', function(data) {
	console.log('Connected with JID: ' + data.jid.user);
	console.log('Yes, I\'m connected!');
});

xmpp.on('chat', function(from, message) {
        console.log(`GOT A MESSAGE : ${message} `);
        // xmpp.send(from,"HEY BHAIII");
        const prompt = require('prompt-sync')();
        const msg = prompt('Your Message: ');
        xmpp.send(from,msg)
});

xmpp.on('error', function(err) {    
	console.error(err);
});

xmpp.connect({
	jid: 'admin@localhost',
	password: 'password',
	host: '0.tcp.in.ngrok.io',
	port: 15032
});

xmpp.subscribe('admin@localhost');
// check for incoming subscription requests
xmpp.getRoster();
