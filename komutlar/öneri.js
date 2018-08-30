const Discord = require('discord.js');
exports.run = (client, message, args , msg) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', 'Öneri adlı komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Önerini yazmalısın.');
    message.delete();
      let guild = message.guild
    const embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setColor('RANDOM')
    .setDescription(**${message.author.username} Önerisi)
    .addField('Kullanıcı Bilgileri', Kullanıcı adı: ${message.author.username}#${message.author.discriminator}\nKullanıcı id: ${message.author.id})
    .addField('Sunucu Adı', message.guild.name)
        .addField('Öneri' , ${mesaj});
      client.channels.get('hangikanalagitmesiniiistiyosanidiniyaz').sendEmbed(embed);
    return message.channel.sendMessage('Önerin gönderildi kısa süre içinde ilgilenilecek.');
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öneri',
  description: 'önerinizi yollar.',
  usage: 'öneri [öneri içeriği]'
};
