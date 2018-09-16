const Discord = require('discord.js');

exports.run = function(client, message, args) {

    var öneri = args.slice(0).join(' ');
    var guildID = "487194840908431361"; 
    var channelID = "490871581346627584";

    if (!öneri)  {
        return message.reply("Lütfen Bir Mesaj Belirtiniz! Kullanım: <öneri <öneriniz> .");
    } else {

        var embed = new Discord.RichEmbed()
            .setTimestamp()
            .addField("Kullanıcı: " + message.author.tag, true)
            .addField("Kullanıcı ID: " + message.author.id, true)
            .addField("Öneri: " + öneri, true)

        client.guilds.get(guildID).channels.get(channelID).send(embed);
        message.reply(":clap: Teşekkürler! Bildirimiz Admine İletildi");
    };
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["önerim", "öneri", "önerilerim", "onerim", "onerilerim"],
 permLevel: 0
};

exports.help = {
 name: 'öneri',
 description: 'Önerinizi Admine Bildirir! ',
 usage: 'öneri'
};
