const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.on("message", msg => {
        const reklam = ["discordapp", "discord.gg", "discord.tk", "discordbots.org", "https://discordapp.com/", "https://discord.gg/", "http://discord.gg/", "htpp:/discordapp.com", "https://discordbots.org/"];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
             if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();

                  return msg.reply('Reklam Yapma Güzel KARDEŞİM! :warning:').then(msg => msg.delete(3000));
             }
          } catch(err) {
            console.log(err);
          }
        }
    });
client.on('message', async message => {
    if (message.content.toLowerCase() === prefix + 'döviz') {
var request = require('request');
request('https://www.doviz.com/api/v1/currencies/USD/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) { 
        var info = JSON.parse(body);
request('https://www.doviz.com/api/v1/currencies/EUR/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error); 
    else if (!error) { 
        var euro = JSON.parse(body);
      message.channel.send(new Discord.RichEmbed().setDescription(`Dolar Satış: **${info.selling}** \nDolar Alış: **${info.buying}** \n\nEuro Satış: **${euro.selling}TL** \nEuro Alış: **${euro.buying}TL**`).setColor('RANDOM').setTitle('Anlık Döviz Kurları'))    }
})
    }
})
    }
})

client.on("message", async message => {
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (command === "vaporwave") {
        const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>¿@ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ[/]^_`ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ{|}~';
        const OFFSET = '!'.charCodeAt(0);
        if (args.length < 1) {
            message.channel.send(':warning: | Şekilli Yazdırmanı İstediğin ``Yazıyı/Metini`` Yazmadın.');
        }

        message.channel.send(
            args.join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .join('')
        )
    }
});


client.on('message', async message => {
    if (message.content.toLowerCase() === prefix + 'saat') {
      message.channel.send(new Discord.RichEmbed().setDescription(`**:flag_tr: Saati:** ***${moment().format('HH:mm:ss')}***`).setColor('RANDOM').setTitle('Anlık Türkiye Saati'))    }
})


client.on("message", msg => {
        const reklam = ["amk", "sg", "siktir git", "amcık", "anneni sikeyim", "oç", "orospu çocuğu", "orospu evladı", "annesiz piç", "aq", "sikik", "siqiq", "götoş", "amk salağı", "sokuk", "piç", "anneni sikeyim", "amını sikeyim", "ebeni sikeyim", "mk",  "amk veledi", "şakir ananı sikeyim",  ];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
             if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();

                  return msg.reply('Küfür Etmemelisin! :warning:').then(msg => msg.delete(3000));
             }
          } catch(err) {
            console.log(err);
          }
        }
    });


client.on("message", msg => {
        const reklam = ["yarrak",];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
             if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();

                  return msg.reply('SANA GİRSİN :sunglasses: ').then(msg => msg.delete(3000));
             }
          } catch(err) {
            console.log(err);
          }
        }
    });

client.on('message', async message => {
    if (message.content.toLowerCase() === prefix + 'döviz') {
var request = require('request');
request('https://www.doviz.com/api/v1/currencies/USD/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) { 
        var info = JSON.parse(body);
request('https://www.doviz.com/api/v1/currencies/EUR/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error); 
    else if (!error) { 
        var euro = JSON.parse(body);
      message.channel.send(new Discord.RichEmbed().setDescription(`Dolar Satış: **${info.selling}** \nDolar Alış: **${info.buying}** \n\nEuro Satış: **${euro.selling}TL** \nEuro Alış: **${euro.buying}TL**`).setColor('RANDOM').setTitle('Anlık Döviz Kurları'))    }
})
    }
})
    }
})

	
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'kasaaç') {
    var sans = ["Hiçbirşey :cry:", "Stattrak AWP | Asiimov", "Karambit | Doopler :dagger:", "Hatıra USP-S | Leş Onaylandı", "Kancalı Bıçak | Fade :dagger:", "Desert Eagle | Kızıl Ağ", "Hatıra Dragon Lore", "Stattrak M4A1 | Uluma", "SGG 07 | Sudaki Kan", "Hatıra Glock 18 | Fade", "AWP | Medusa", "Desert Eagle | Alev", "Stattrak AK-47 | Vulkan",  "M4A1-S | Hiper Canavar",  "Hatıra M4A1-S | Altın Bobin", "Statrak AWP | Elektrikli Kovan", "P90 | Ecel Kedisi", "AWP | Yıldırım Çarpması", "Karambit | Mazi :dagger:", "Hatıra Faction Bicaği :dagger:"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    msg.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Sana **${sonuc}** Çıktı.`).setTitle('Başarıyla Kasa Açıldı').setThumbnail('https://cdn.discordapp.com/attachments/470299543213309962/490542825587474433/38618281_2121372437882874_6914655660160319488_n.jpg').setColor('RANDOM'));
  }
});
  

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

var request = require('request');

request('https://api.eggsybot.xyz/espri', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
        console.log(info.soz); // ve konsola çıktıyı versin.
    }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'herkese çay') {
    msg.reply('Şakire Yooh :smile:');
  }
});



client.on('message', msg => {
  if (msg.content.toLowerCase() === 'peki şakire çay yok') {
    msg.reply('Ne demek Şakir ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'adınımı değiştirdin') {
    msg.reply('Sen bana nasıl Şakir dersin lann kelek!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ne diyem mahmutmu diyem şakir') {
    msg.reply('Şakir abi, dayı, ağa diyeceksin!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'o günler bitti şakir') {
    msg.reply('Ne Demek Bitti');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'şakir') {
    msg.reply('Ne Demek Şakir');
  }
});

client.on('message', msg => {
  if (msg.content === 'şakir bi sus') {
    msg.reply('Susuyorum Ulen Sen Konuş Ciğerim :smile:');
  }
});

var presences = [
    "Ne Demek Şakir",
    "şakir-kasaaç şakir-döviz",
    "şakir-yardım n!davet",
    "Yeni Eklenenler şakir-yardım Son Sayfasında",
    "Şakiri LevyeBaskan Yarattı"
]


client.on('ready', () => {
    client.user.setActivity(utils.randItemFromArray(presences)).then(() => {
        setTimeout(() => {
            client.user.setActivity(utils.randItemFromArray(presences))
        }, 1)
    })
});



client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.TOKEN);
