const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require(`./ayarlar.json`);

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(``);
  console.log(`BU BOT PAKETININ YAPIMCISI BERKER KESKIN DIR`);
  console.log(`Bot ${client.user.tag} AKTIF!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase === '56') {
    msg.reply('author');
  }
  if (!msg.content.startsWith(prefix)) {
    return;
  }
  if(msg.content.toLowerCase() === prefix + `author`) {
    msg.reply(`Berker Keskin`)
  }
});

client.login(`YOUR TOKEN ID`);
