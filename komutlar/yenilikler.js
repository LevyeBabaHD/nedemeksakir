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
    .setDescription('İşte Yenilikler: | Küfür Engeli Reklam Engeli Eklendi Beta Sürümdedir| şakir-8ball = Bota Sordugunuz Soruları Cevaplar 
şakir-danset = Dans Etmeye Başlarsınız Cuppa Cuppa 
şakir-kahkaha = Kahkaha Atarsınız 
şakir-sins-aga Joni Reyis 
şakir-starwars = Starwars Filminin Pixel Versiyonunu Atar 
şakir-stresçarkı = Stresçarkı Çevirirsiniz /nşakir-taklaat = Takla Atarsınız 
şakir-woodie = Oduncu 
şakir-yazıtura = Yazı Tura Atarsınız ');
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
