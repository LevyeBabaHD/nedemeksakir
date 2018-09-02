const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendCode('asciidoc', `= Komut Listesi =**Eğlence ve Kullanıcı Komutları:**", şakir-banned = Dene ve Gör! \nşakir-avatarım = Avatarınınızı Gösterir. \nşakir-herkesebendençay = Herkese Çay Alırsınız. \nşakir-koş = Koşarsınız.\nşakir-çayiç = Çay İçersiniz. \nşakir-çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nşakir-çayaşekerat = Çaya Şeker Atarsınız. \nşakir-yumruh-at = Yumruk Atarsınız. \nşakir-yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nşakir-sunucuresmi = BOT Sunucunun Resmini Atar. \nşakir-sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nşakir-kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \nşakir-söv = Size Özelden Söver. \nşakir-8ball = Bota Sordugunuz Soruları Cevaplar \nşakir-danset = Dans Etmeye Başlarsınız Cuppa Cuppa \nşakir-kahkaha = Kahkaha Atarsınız \nşakir-sins-aga Joni Reyis \nşakir-starwars = Starwars Filminin Pixel Versiyonunu Atar \nşakir-stresçarkı = Stresçarkı Çevirirsiniz /nşakir-taklaat = Takla Atarsınız \nşakir-woodie = Oduncu \nşakir-yazıtura = Yazı Tura Atarsınız şakir-şanslısayım = Şanslısayınızın Ne Olduğunu Söyler\n\n[Komut hakkında bilgi için ${ayarlar.prefix}yardım <komut adı>]\n\n${client.commands.map(c => `${ayarlar.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y' 'özeldm'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
