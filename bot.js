const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content==="nep"){
        message.channel.send("nep nep");
    }
    if (message.content==="Nep"){
        message.channel.send("nep nep");
    }
    if (message.content==="nep nep"){
        while(nep<10){
            message.channel.send("nep nep nep nep nep nep nep nep nep");
            nep++;
        }
        nep=0;
    }
            
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
