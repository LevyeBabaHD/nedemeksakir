const Discord = require("discord.js");
const watched = new Discord.Collection();
const mentionHook = new Discord.WebhookClient('489474850369306634','m2bNnt0vV0oc4YWKtjiy28PPVVdID3CdigLBYT8MHUZoKT8gbePODn320ien-3BPZKlO');

exports.run = (client, msg, args) => {
  const channel = (client.channels.get(args[0]) || msg.channel);
  if(watched.has(channel.id)) {
    watched.get(channel.id).stop();
    msg.channel.send("Suan Kanali izlemeyi biraktim. #"+channel.name);
    return watched.delete(channel.id);
  }
  
  msg.channel.send("Şuan Kanalı izliyorum. #"+channel.name);
  const collector = channel.createMessageCollector(()=>true);
  collector.on("collect", (collected, collector) => console.log(`[WATCHED][${collected.author.username}][#${collected.channel.name}]${collected.content}`));
  collector.on("collect", (collected, collector) => mentionHook.send(`[WATCHED][${collected.author.username}][#${collected.channel.name}]${collected.content}`));
  watched.set(channel.id, collector);

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['izle']
};

exports.help = {
  name: 'kanalıizle',
  description: 'Starts/Stops a watch on a channel. Logs all messages from that channel while running.',
  usage: 'watch <channelid>'
};
