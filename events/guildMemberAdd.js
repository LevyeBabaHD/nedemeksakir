client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'hosgeldin');
  if (!channel) return;
    const hosgeldin = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription('Sunucuya yeni biri katıldı hoşgeldin! ' + `${member}`);
    return channel.sendEmbed(hosgeldin);
});
