const Discord = require('discord.js');

exports.run = (client,message,args,tools) => {
  
  let pages = ['**Eğlence Komutları** \nşakir-banned = Dene ve Gör! \nşakir-avatarım = Avatarınınızı Gösterir. \nşakir-herkesebendençay = Herkese Çay Alırsınız. \nşakir-koş = Koşarsınız.\nşakir-çayiç = Çay İçersiniz. \nşakir-çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nşakir-çayaşekerat = Çaya Şeker Atarsınız. \nşakir-yumruh-at = Yumruk Atarsınız. \nşakir-yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nşakir-sunucuresmi = BOT Sunucunun Resmini Atar. \nşakir-sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nşakir-kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir.' , '**Modeator Komutları** \nşakir-ban = İstediğiniz Kişiyi Sunucudan Banlar. \nşakir-kick  = İstediğiniz Kişiyi Sunucudan Atar. \nşakir-unban = İstediğiniz Kişinin Yasağını Açar. \nşakir-otorol = Sunucuya Girenlere Oto Rol Verir. \nşakir-sustur = İstediğiniz Kişiyi Susturur. \nşakir-oylama = Oylama Açar. \nşakir-otorol  = OtoRol vermeye yarar. \nşakir-duyuru = Güzel Bir Duyuru Görünümü Sağlar.' , '**Ana Komutlar** \nşakir-yardım = BOT Komutlarını Atar. \nşakir-bilgi = BOT Kendisi Hakkında Bilgi Verir. \nşakir-ping = BOT Gecikme Süresini Söyler. \nşakir-davet = BOT Davet Linkini Atar. \nşakir-istatistik = BOT İstatistiklerini Atar'  , 'Şakir Sözleri **\nherkese çay = Dene Ve Gör \npeki şakire çay yok= Dene Ve Gör \nadınımı değiştirdin = Dene Ve Gör\nne diyem mahmutmu diyem şakir = Dene Ve Gör\no günler bitti şakir= Dene Ve Gör\nşakir = Denede Gör\nşakir bi sus\ Dene Ve Gör**' , 'Diğer \nşakir-öl = Ölürsünüz \nşakir-öp = Öpersiniz (Nsfw İçerir) \nşakir-mesajküçült = Yazdığınız Mesajı  Küçültür \nşakir-mesajdöndür = Mesajı Dönderir \nşakir-manzararesim = Rastgele Bitmeyen Manzararesimleri Atar \nşakir-bunny = Tavşan Gibi Zıplarsınız . \nşakir-söv = Size Özelden Söver. \nşakir-8ball = Bota Sordugunuz Soruları Cevaplar \nşakir-danset = Dans Etmeye Başlarsınız Cuppa Cuppa \nşakir-kahkaha = Kahkaha Atarsınız \nşakir-sins-aga Joni Reyis \nşakir-starwars = Starwars Filminin Pixel Versiyonunu Atar \nşakir-stresçarkı = Stresçarkı Çevirirsiniz /nşakir-taklaat = Takla Atarsınız \nşakir-woodie = Oduncu \nşakir-yazıtura = Yazı Tura Atarsınız \nşakir-şanslısayım = Şanslısayınızın Ne Olduğunu Söyler. \nşakir-kedifoto = Kedi Fotoğrafları Atar \nşakir-atatürk = Atatürk Resimleri Atar \nşakir-dab = Dab Yaparsınız \nşakir-köpek = Rastgele Köpek Fotoğrafları Atar \nşakir-destek Şakirin Destek Sunucusunda '];
  let page = 1;
  
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter(`${page}/${pages.length}`)
  .setDescription(pages [page-1])
 
  message.channel.send(embed).then(msg => {
    
    msg.react('⏪').then( r  =>{
    msg.react('⏩') 
      
    const backwardsFilter = (reaction , user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
    const forwardsFilter = (reaction , user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
     
    const backwards = msg.createReactionCollector(backwardsFilter, {time: 60000}); 
    const forwards = msg.createReactionCollector(forwardsFilter, {time: 60000}); 
      
     backwards.on('collect', r => {
     if (page === 1) return;
     page--;
     embed.setDescription(pages [page-1]);
     embed.setFooter(`Page ${page} of ${pages.length}`);
     msg.edit(embed)
     }) 
      
     forwards.on('collect', r => {
     if (page === pages.length) return;
     page++;
     embed.setDescription(pages [page-1]);
     embed.setFooter(`Page ${page} of ${pages.length}`);
     msg.edit(embed)
     }) 
      
    })
    
  })
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['Yardım' , 'yardim' , 'y' , 'help' , 'hyardım', 'yardım' ],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Yardım komutlarını görüntüler.',
  usage: 'yardım'
};
