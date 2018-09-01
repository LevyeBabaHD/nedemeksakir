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

client.on("message", msg => {
        const reklam = ["amk", "sg", "siktir git", "amcık", "anneni sikeyim", "oç", "orospu çocuğu", "orospu evladı", "annesiz piç" ];
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

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'hosgeldin');
  if (!channel) return;
    const hg = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription('Sunucuya yeni biri katıldı hoşgeldin! ' + `${member}`);
    return channel.sendEmbed(hg);
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'hosgeldin');
  if (!channel) return;
     const bb = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription('Sunucudan ' + `${member} ` + 'ayrıldı güle güle!');
    return channel.sendEmbed(bb);
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

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'herkese çay') {
    msg.reply('Şakire Yooh :smile:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sigara ic') {
     msg.reply('Sigara İçiyorum!');
      msg.edit(' :smoking: :cloud: :cloud: :cloud: ');
      msg.edit(' :smoking: :cloud: :cloud: ');
      msg.edit(' :smoking: :cloud:  ');
      msg.edit(' :smoking:  ');
      msg.edit(' Sigaram Bitti! ŞAKİR İÇİYO DİYE SİZDE İÇMEYİN KAMU SPOTU :smile: ');
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
    msg.reply('Efendim Ciğerim');
  }
});

client.on('message', msg => {
  if (msg.content === 'şakir bi sus') {
    msg.reply('Susuyorum Ulen Sen Konuş Ciğerim :smile:');
  }
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
