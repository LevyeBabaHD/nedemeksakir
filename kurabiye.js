const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://cdn.discordapp.com/attachments/483316701564370955/487390676124958730/qIv2juem_400x400.jpg",
          color: 0xD97634,
		  description: "Canım Gel Buraya Sana Kurabiye Vereceğim"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'kurabiye',
  description: 'kurabiye Verir.',
  usage: 'kurabiye'
};
