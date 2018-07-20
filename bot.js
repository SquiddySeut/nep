const Discord = require('discord.js');
const client = new Discord.Client();
var nepcount;
var n;
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('nep');
  	}
    if (message.content==="nep"){
        message.channel.send("nep nep");
    }
    if (message.content==="Nep"){
        message.channel.send("nep nep");
    }
    if (message.content==="nepcount"){
        message.reply("What's the nepcount?");
        n=1;
        nepcount=10;
    }
    if (message.content==="1"&&n>=1){
        message.reply("set to one");
        n=2;
        nepcount=10;
    }
     if (message.content==="2"&&n>=1){
        message.reply("set to two");
        n=2;
        nepcount=20;
    }
     if (message.content==="3"&&n>=1){
        message.reply("set to three");
        n=2;
        nepcount=30;
    }
     if (message.content==="4"&&n>=1){
        message.reply("set to four");
        n=2;
        nepcount=40;
    }
     if (message.content==="5"&&n>=1){
        message.reply("set to five");
        n=2;
        nepcount=50;
    }
    if (message.content==="nep nep"&&n===2){
        nep=0;
        while(nep<nepcount){
            message.channel.send("nep nep nep nep nep nep nep nep nep");
            nep++;
        }
        nep=0;
    }
    //if (message.content==="
            
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
