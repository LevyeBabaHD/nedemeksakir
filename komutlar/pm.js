const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`pm` adlı komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Ne göndericem onuda yazı ver.');
  if (message.mentions.users.size < 1) return message.reply('Kime pm atıcam onuda @kullanıcı şeklinde yazı ver.').catch(console.error);
  message.delete();
  message.reply('Mesajını gönderdim.')
  const embed = new Discord.RichEmbed()
  .setColor(0xff2578)
  .setTitle(`Bir mesaj alındı gönderen: ${message.author.username}`)
  .setDescription(reason);
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permlevel: 0,
};

exports.help = {
  name: 'pm',
  description: 'Bir kullanıcıya özel mesaj yollar.',
  usage: 'pm'
};
