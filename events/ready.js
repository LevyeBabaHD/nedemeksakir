const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
 
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] NE DEMEK ŞAKİRRR LEVYEEE`);


  client.user.setStatus("online");
client.user.setGame(" 30 AĞUSTOZ ZAFER BAYRAMINIZ KUTLU OLSUN| NE DEMEK ŞAKİR | şakir-yardım " + client.guilds.size + " Sunucu " + client.users.size + " Kullanıcı ", "https://twitch.tv/grmemo");
}
