const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  message.channel.send(':clock1: | Fotoğraf Yükleniyor..')
  köpek1 = "./img/hav1.jpg"; köpek2 = "./img/hav2.jpg"; köpek3 = "./img/hav3.jpg"; köpek4 = "./img/hav4.png"; köpek5 = "./img/hav5"; köpek6 = "img/hav6.jpg";
    number = 3,2,4,1,5,6
    var random = Math.floor(Math.random() * (number - 1 + 1)) + 1; 
    switch(random) {
        case 1: message.channel.send({ files: [köpek1] }); message.channel.bulkDelete(1); break;
        case 2: message.channel.send({ files: [köpek2] }); message.channel.bulkDelete(1); break;
        case 3: message.channel.send({ files: [köpek3] }); message.channel.bulkDelete(1); break;
        case 4: message.channel.send({ files: [köpek4] }); message.channel.bulkDelete(1); break;
        case 5: message.channel.send({ files: [köpek5] }); message.channel.bulkDelete(1); break;
        case 6: message.channel.send({ files: [köpek6] }); message.channel.bulkDelete(1); break;
};
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['köpekfoto', 'köpek'],
  permLevel: 0
};

exports.help = {
  name: 'köpek',
  description: 'Rastgele Bir Şekilde Köpek Fotoğrafı Yollar.!',
  usage: 'köpek'
};
