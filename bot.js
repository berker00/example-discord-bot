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
  if (msg.content.toLowerCase === 'hav') {
    msg.reply('host aminakodumunun');
  }
  if (!msg.content.startsWith(prefix)) {
    return;
  }
  if(msg.content.toLowerCase() === prefix + `author`) {
    msg.reply(`Berker Keskin`)
  }
  if(msg.content.toLowerCase() === prefix + `napiyon knk`) {
    msg.reply(`Berkere soyleme de canim cok sikkin`)
  }
  if(msg.content.toLowerCase() === prefix + `noldu`) {
    msg.reply(`bu Berker benden habersiz kariya gidiyor beni cagirmiyor sikicem onu`)
  } 
  if(msg.content.toLowerCase() === prefix + `fatih`) {
    msg.reply(`https://www.youtube.com/watch?v=xzUqc--CVjY`)
  }
  if(msg.content.toLowerCase() === prefix + `enes`) {
    msg.reply(`AKSUNUCUM ABI https://aksunucum.com`)
  }
  if(msg.content.toLowerCase() === prefix + `doruk`) {
    msg.reply(`Buyur Birader Ben Abisiyim https://tenor.com/view/hayırdır-birader-hayırdır-bilader-bir-sorun-mu-var-dog-köpek-gif-19119669`)
  }
  if(msg.content.toLowerCase() === prefix + `berker`) {
    msg.reply(`Ulu onder, gazi , maresal , son hava bukucu , padisah , sultanlar sultani , sadrazamin sol ve sag tasagi , ayni zamanda CAN YAMAN Berker mi?`)
  }
  if(msg.content.toLowerCase() === prefix + `yagiz`) {
    msg.reply(`Bunu mu demek istemistiniz: OROSPU`)
  }
  if(msg.content.toLowerCase() === prefix + `ibo`) {
    msg.reply(`https://youtu.be/BUxCUdWYKgg`)
  }
  if(msg.content.toLowerCase() === prefix + `arif`) {
    msg.reply(`BU MESAJA CEVAP VEREMIYORUM OROSBU COCUKLARININ DDOS SALDIRISI ALTINDAYIZ`)
  }
  if(msg.content.toLowerCase() === prefix + `emre`) {
    msg.reply(`ONU BUNU BILMEM AGA BEN BAROTRAUMACIYIM : https://store.steampowered.com/app/602960/Barotrauma/`)
  }
  if(msg.content.toLowerCase() === prefix + `davet`) {
    msg.reply(`https://discord.com/oauth2/authorize?client_id=798950239834865704&scope=bot&permissions=805829694`)
  }
  if(msg.content.toLowerCase() === prefix + `help`) {
    msg.reply(`?kisi adi yazarak cevaplari gorebilirsiniz,
    ?davet yazarak sunucunuza davet linkini gorebilirsiniz.`)
  }
  if(msg.content.toLowerCase() === prefix + `emir`) {
    msg.reply(`KOR PIC`)
  }
  if(msg.content.toLowerCase() === prefix + `` ) {
    msg.reply(`anlasilmadi lutfen duzgun yaziniz | ORNEK: ?komut |`)
  }
  if(msg.content.toLowerCase() === prefix + `burak`) {
    msg.reply(`ne var la bebe`)
  }
  if(msg.content.toLowerCase() === prefix + `zey`) {
    msg.reply( `miyav?`)
  }
  if(msg.content.toLowerCase() === prefix + `ahmet`) {
    msg.reply(`THIS IS MALATYAAAAAAAA`)
  }
  if(msg.content.toLowerCase() === prefix + `altug`) {
    msg.reply( `800K KAYN`)
  }
});

client.login(`YOUR TOKEN ID`);