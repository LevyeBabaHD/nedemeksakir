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
