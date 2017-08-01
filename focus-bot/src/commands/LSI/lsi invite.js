const Discord = require('discord.js');
exports.run = (bot, msg, args) => {

    const embed = new Discord.RichEmbed()
        .setAuthor(`${msg.author.username}`, bot.user.avatarURL)
  .setColor(0x3f1969)
  .setThumbnail('http://i.imgur.com/z28dxNp.png/')
        .addField('Info', 'Here is our Discord link. Feel free to share it with friends.')
        .addField('Invite Link', '[Click Here](https://discord.io/lsinvest)')
        .setFooter('Our community is open to all that are willing to participate and follow the #rules.');
		 msg.delete();
         msg.channel.sendEmbed(embed);
      return;

  };

  exports.info = {
      name: 'inv',
      description: 'links the lsi invite Link',
      usage: 'inv',
      credits: 'fOCUSrEACHER17'
  };
