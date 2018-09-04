const Discord = require('discord.js');

exports.run = (client, message , args) => {
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwMjE1MzQ3OTE2NDAwMjMwNSIsImJvdCI6dHJ1ZSwiaWF0IjoxNTM2MDQ2MTYyfQ.9GQV4CQwBV_h9Ef5yA1kXnnFVGNiwLV6FPZu_k-RnWY', client);
dbl.hasVoted(message.author.id).then(voted => {
        if (voted) {
let role = message.guild.roles.find(r => r.name === "Destek Bekliyor");
if (!role) return message.reply('`Destek Bekliyor` Rolünü bulamıyorum.');
if(!message.member.roles.has(role.id)){
  message.member.addRole(role);
  message.channel.sendMessage('Destek Bekliyor rolü verildi.');
}
  if(message.member.roles.has(role.id)){
  message.member.removeRole(role);
  message.channel.sendMessage('Destek Bekliyor rolü alındı');
}
        }
  else if (!voted) return message.channel.send("Bu komutu kullanmak için bota oy vermen lazım lütfen bu linkten oyver https://discordbots.org/bot/402153479164002305/vote");
})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'destek',
  usage: 'destek'
};
