const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    message.guild.createChannel(`talep-${message.author.id}`, 'text').then(ch => {
        message.guild.roles.forEach((role) => {
            if (!role.hasPermission("MANAGE_MESSAGES")) {
                ch.overwritePermissions(role,{
                    VIEW_CHANNEL: false,
                }).catch()
            if (role.hasPermission("MANAGE_MESSAGES")) {
                ch.overwritePermissions(role,{
                    VIEW_CHANNEL: true,
                }).catch()
                ch.overwritePermissions(message.author.id,{
                    VIEW_CHANNEL: true,
                }).catch()
            }
        }})

        const embed = new Discord.RichEmbed()
        .setAuthor("Şakir Bot Canlı Destek!")
        .setDescription(`Merhaba! Müsait bir yetkilimiz sizinle ilgilenecektir.\nEğer ilgilenen olmazsa birisiyle özel mesaja geçebilirsiniz. Ayrıca [kapat](destek sunucunuzun linki) yazabilirsiniz!**`)
        .setFooter('» ŞakirBot | Canlı Destek', client.user.avatarURL)
        .setTimestamp()
        ch.send(embed).catch()
        ch.awaitMessages((msg)=> {
            if (msg.content === `kapat`) {
                ch.send("`Talebiniz iptal ediliyor!`").then(()=>{
                    setTimeout(()=> {
                        ch.delete().catch()
                    },1000)
                });
            }
        },{time:86400000})
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['canli-destek'],
  permLevel: "0"
};

exports.help = {
  name: "canlı-destek",
  description: "canlı-destek",
  usage: "canlı-destek"
