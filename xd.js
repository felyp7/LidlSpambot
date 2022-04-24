const tmi = require('tmi.js'),
{ username, password } = require('./settings.json');
const client = new tmi.Client({    

    options: { 
        joinInterval: 300,
        debug: true, 
        messagesLogLevel: "info"
    },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: username,
        password: password   // edit in settings.json file
    },
    channels: ["YOUR_CHANNELS"]
});

client.connect().catch(console.error);



    client.on("message", async (channel, user, message, self) => { 

        


        let isMod = user.mod || user['user-type'] === 'mod';
        let isBroadcaster = channel.slice(1) === user.username;
        let xd = isMod || isBroadcaster;
        let isBroadcasterUp = isBroadcaster;


        const args = message.slice(1).split(' ')
        


        
        if (message.toLowerCase().startsWith('_spam') && user.username === username){
            
            for (let i=0;i<120;i++) {
                client.say(channel, args.slice(1).join(" "))
            
                }
            } 
        
        

        
        

})
