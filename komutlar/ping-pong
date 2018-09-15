const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Ping Menüsü",
              icon_url: "https://cdn.discordapp.com/attachments/487719679868272689/488331544587403274/image0.jpg"
            },
			    "thumbnail": {
				 "url": "https://cdn.discordapp.com/attachments/487719679868272689/488329963926192158/image0.png"
			},
            title: "",
            description: `:ping_pong: [Pong](https://www.discordapp.com) : **${Math.round(client.ping)}** ms \nÇok Hızlıyım Dimi :joy:`,
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "© Simba"
            }
          }
        });  
	    message.react("📝")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p', 'pong', 'uptime',],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Tüm komutları gösterir.',
  usage: 'ping'
};
