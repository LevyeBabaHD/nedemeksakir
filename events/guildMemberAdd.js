module.exports = member => {
    let username = member.user.username;
    member.send('Sunucuya Hoş Geldin Bu Sunucuda Şakir Kullanılıyor!');
    member.guild.default.send('');
};
