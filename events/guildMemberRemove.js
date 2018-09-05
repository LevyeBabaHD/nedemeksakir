client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'hosgeldin');
  if (!channel) return;
     const bb = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription('Sunucudan ' + `${member} ` + 'ayrıldı güle güle!');
    return channel.sendEmbed(bb);
});
