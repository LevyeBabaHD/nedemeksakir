const Discord = require('discord.js');
const talkedRecently = new Set();

exports.run = async function (bot, message, args) {
		if (message.channel.type === 'dm') {
		message.author.sendMessage('Bu komutu özel mesajlarda kullanamassınız.')
	}
	if (message.channel.type !== 'dm') {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) {
		   message.channel.sendMessage('Bu komutu kullanmak için yetkin yok.')
    }else{
if (talkedRecently.has(message.author.id))
  return message.channel.sendMessage("Bu komutu `10 saniye` sonra tekrar kullanınız.");
if (message.author.bot) return;
if(message.webhookID) return;

talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id);
}, 2500);
if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.reply("Mesajları silmem için **Mesajları Yönet** Yetkisine sahip olmalıyım").catch(console.error)
const user = message.mentions.users.first();
const amount = !!parseInt(message.content.split(" ")[1]) ? parseInt(message.content.split(" ")[1]) : parseInt(message.content.split(" ")[2])
if(amount <= 1) return message.reply('En az 2 mesaj sile bilirsiniz.')
if (!amount) return message.reply("Lütfen silmek için bir miktar belirtin!");
if (!amount && !user) return message.reply("Lütfen silmek istediğiniz iletilerin bir kullanıcı ve tutarını veya yalnızca bir miktar belirtin!");
message.channel.fetchMessages({
  limit: amount,
}).then((messages) => {
  if (user) {
    const filterBy = user ? user.id : Client.user.id;
    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
    message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
   const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('Lütfen bu komutu 10 saniyede bir kullanın.')
  .setDescription(`${user} adlı kişinin **${amount}** tane mesajını sildim. Kanal **${message.channel.name}**`)
  .setFooter('Bu mesaj kendini otomatik silecektir.');
  return message.channel.sendEmbed(embed).then(message => {
    message.delete(10000)
  })
  } else {
  message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
   const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('Lütfen bu komutu 10 saniyede bir kullanın.')
  .setDescription(`Silinen mesaj sayısı **${amount}** Kanal **${message.channel.name}**`)
  .setFooter('Bu mesaj kendini otomatik silecektir.');
  return message.channel.sendEmbed(embed).then(message => {
    message.delete(10000)
  })
}
});
	}
	}
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'temizle',
  usage: 'temizle sayı'
};