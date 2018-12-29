const Discord = require('discord.js');
const client = new Discord.Client();
console.log("By al7midy");


client.on("ready", () => {
let channel =     client.channels.get("527067290508722179")
setInterval(function() {
channel.send(`1`);
}, 30)
})

a.on("ready", () => {
let channel =     client.channels.get("527067290508722179")
setInterval(function() {
channel.send(`2`);
}, 30)
})

b.on("ready", () => {
let channel =     client.channels.get("527067290508722179")
setInterval(function() {
channel.send(`3`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
a.login(process.env.BOT_TOKEN1);
b.login(process.env.BOT_TOKEN2);



