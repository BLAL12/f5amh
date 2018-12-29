const Discord = require('discord.js');
const client = new Discord.Client();
const a = new Discord.Client();
const b = new Discord.Client();

const ownerid = '478975894061449216';
console.log("By al7midy");


client.on("ready", () => {
let channel =     client.channels.get("528465001732636693")
setInterval(function() {
channel.send(`2`);
}, 30)
})

a.on("ready", () => {
let channel =     a.channels.get("528465001732636693")
setInterval(function() {
channel.send(`1`);
}, 30)
})

b.on("ready", () => {
let channel =     b.channels.get("528465001732636693")
setInterval(function() {
channel.send(`3`);
}, 30)
})

client.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != ownerid) return;

   message.channel.sendMessage(args.join("  "))
  }
});
a.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != ownerid) return;

   message.channel.sendMessage(args.join("  "))
  }
});
b.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
        		        if (message.author.id != ownerid) return;

   message.channel.sendMessage(args.join("  "))
  }
});


client.login(process.env.BOT_TOKEN);
a.login(process.env.BOT_TOKEN1);
b.login(process.env.BOT_TOKEN2);
