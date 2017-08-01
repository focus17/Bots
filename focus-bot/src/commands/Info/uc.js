    const Discord = require('discord.js');
exports.run = (bot, msg, args) => {

    msg.delete();
    const embed = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .setAuthor('JustinWick', bot.user.avatarURL)
        .setTimestamp()
        .addField('Users', msg.guild.memberCount)
      msg.channel.sendEmbed(embed);
      return;
  };

  exports.info = {
      name: 'uc',
      description: 'usercount',
      usage: 'uc'
      
  };


/// Made by navaz 