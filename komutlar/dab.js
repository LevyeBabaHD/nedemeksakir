const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let embed = new Discord.RichEmbed()
  .setImage('https://media.giphy.com/media/A4R8sdUG7G9TG/giphy.gif');

  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dab-yap'],
  permLevel: 0
};

exports.help = {
  name: 'dab',
  description: 'Dab Yaparsınız.',
  usage: 'dab'
};
