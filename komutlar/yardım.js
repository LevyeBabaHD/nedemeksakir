const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `şakir-banned = Dene ve Gör! \nşakir-avatarım = Avatarınınızı Gösterir. \nşakir-herkesebendençay = Herkese Çay Alırsınız. \nşakir-koş = Koşarsınız.\nşakir-çayiç = Çay İçersiniz. \nşakir-çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nşakir-çayaşekerat = Çaya Şeker Atarsınız. \nşakir-yumruh-at = Yumruk Atarsınız. \nşakir-yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nşakir-sunucuresmi = BOT Sunucunun Resmini Atar. \nşakir-sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nşakir-kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \nşakir-söv = Size Özelden Söver.`)
  .addField("**Sunucu Yetkilisi Komutları**", `şakir-ban = İstediğiniz Kişiyi Sunucudan Banlar. \nşakir-kick  = İstediğiniz Kişiyi Sunucudan Atar. \nşakir-unban = İstediğiniz Kişinin Yasağını Açar. \nşakir-sustur = İstediğiniz Kişiyi Susturur. -MUTED- \nşakir-oylama = Oylama Açar. \nşakir-duyurbot = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Botun Ana Komutları**", "şakir-yardım = BOT Komutlarını Atar. \şakir-bilgi = BOT Kendisi Hakkında Bilgi Verir. \nşakir-ping = BOT Gecikme Süresini Söyler. \nşakir-davet = BOT Davet Linkini Atar. \nk!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Gizli Komutlar:**", " **herkese çay = Dene Ve Gör \npeki şakire çay yok= Dene Ve Gör \nadınımı değiştirdin = Dene Ve Gör**\nne diyem mahmutmu diyem şakir = Dene Ve Gör\no günler bitti şakir= Dene Ve Gör\nşakir = Denede Gör\nşakir bi sus\ Dene Ve Gör   ")
  .setFooter('**Beni Yaratan =ＬＥＶＹＥ#8336**  ')


  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
