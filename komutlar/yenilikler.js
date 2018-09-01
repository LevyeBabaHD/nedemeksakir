const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('İşte Yenilikler: | Küfür Engeli Reklam Engeli Eklendi Beta Sürümdedir| \nşakir-8ball = Bota Sordugunuz Soruları Cevaplar  \nşakir-danset = Dans Etmeye Başlarsınız Cuppa Cuppa   \nşakir-kahkaha = Kahkaha Atarsınız  \nşakir-sins-aga Joni Reyis  \nşakir-starwars = Starwars Filminin Pixel Versiyonunu Atar \nşakir-stresçarkı = Stresçarkı Çevirirsiniz  \nşakir-taklaat = Takla Atarsınız  \nşakir-woodie = Oduncu  \nşakir-yazıtura = Yazı Tura Atarsınız  '); 
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenigelenkomutlar', 'yenibotkomutları', 'yenilikler', 'yenikomutlar'],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: "Yenilikleri ATAR",
  usage: 'yenilikler'
};
