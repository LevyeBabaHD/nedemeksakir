const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
client.user.setGame("şakir-yardım | Yeni Haraketli şakir-yardım Geldi <3PRONAX<3 <3ŞAKİR<3 |  " + client.guilds.size + " Sunucu " + client.users.size + " Kullanıcı ", "https://twitch.tv/grmemo");
}
