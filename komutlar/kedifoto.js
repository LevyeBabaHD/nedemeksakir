const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  message.channel.send(':clock1: | Fotoğraf Yükleniyor..')
  kedifoto1 = "./img/kedifoto/1.jpg"; kedifoto2 = "./img/kedifoto/2.jpg"; kedifoto3 = "./img/kedifoto/3.jpg"; kedifoto4 = "./img/kedifoto/4.jpg"; kedifoto5 = "./img/kedifoto/5.jpg"; kedifoto6 = "./img/kedifoto/6.jpg";
    number = 3,2,4,1,5,6
    var random = Math.floor(Math.random() * (number - 1 + 1)) + 1; 
    switch(random) {
        case 1: message.channel.send({ files: [kedifoto1] }); message.channel.bulkDelete(1); break;
        case 2: message.channel.send({ files: [kedifoto2] }); message.channel.bulkDelete(1); break;
        case 3: message.channel.send({ files: [kedifoto3] }); message.channel.bulkDelete(1); break;
        case 4: message.channel.send({ files: [kedifoto4] }); message.channel.bulkDelete(1); break;
        case 5: message.channel.send({ files: [kedifoto5] }); message.channel.bulkDelete(1); break;
        case 6: message.channel.send({ files: [kedifoto6] }); message.channel.bulkDelete(1); break;
};
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kedifoto', 'kedi'],
  permLevel: 0
};

exports.help = {
  name: 'kedi',
  description: 'Rastgele Bir Şekilde Kedi Fotoğrafı Yollar.!',
  usage: 'kedi'
};
