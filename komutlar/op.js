const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()

  .setColor('RANDOM')
  .setImage("https://thumbs.gfycat.com/SorrowfulSpectacularGossamerwingedbutterfly-size_restricted.gif")
  .setImage("https://media.giphy.com/media/KMuPz4KDkJuBq/giphy.gif")
  .setImage("https://media.giphy.com/media/l2Sq0VUFKf7wEAaGc/giphy.gif")
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öp',
  description: 'Bir Kullanıcıyı Öper.',
  usage: 'öp'
};
