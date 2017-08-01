const Discord = require('discord.js');
exports.run = (bot, msg) => {

    const embed = new Discord.RichEmbed()
        .setAuthor(`${msg.author.username}`, bot.user.avatarURL)
  .setColor(0x3f1969)
  .setThumbnail('http://i.imgur.com/z28dxNp.png/')
        .addField('Warning', 'It seems as though you are no longer familiar with our rules. If you wish join a lobby, keep in mind that modders dont live to give money away')
        .addField('Basic rule #1', '**Dont** ask for money drops! You **WILL** be notified')
        .addField('Referance', 'Please refer to [#rules](https://discord.gg/dkqQ2Mv) To become more familiar with our rules')
        .setFooter('THIS IS A WARNING Further Violations will result in Punishment');
      msg.delete();
         msg.channel.sendEmbed(embed);
      return;

  };

  exports.info = {
      name: 'lbby',
      description: 'warns user for asking for drops',
      usage: 'lbby',
      credits: 'fOCUSrEACHER17'
  };
