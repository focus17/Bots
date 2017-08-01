const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (!user) return;
    const warnedpm = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .setAuthor('Warning', client.user.avatarURL)
        .setTimestamp()
        .setThumbnail(user.avatarURL)
        .addField('Action', 'Warning', true)
        .setDescription(`You have been warned for: \`${reason}\`. You have been warned and this will be your last chance. Next offence may lead to a Punish/Mute or even a kick if you think you were wrongly accused feel free to pm a [Staff Supervior] Or an [Admin]`)
        .addField('Staff Member', `${message.author.username}#${message.author.discriminator} (${message.author.id})`, true);
    const embed = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .setAuthor('Warning', client.user.avatarURL)
        .setTimestamp()
        .setThumbnail(user.avatarURL)
        .addField('Action', 'Warning')
        .addField('Reason', `${reason}`, true)
        .addField('User', `${user.username}#${user.discriminator} (${user.id})`)
        .addField('Staff Member', `${message.author.username}#${message.author.discriminator} (${message.author.id})`);
    message.delete();
    message.guild.member(user).sendEmbed(warnedpm);
    message.channel.sendEmbed(embed);
};

exports.info = {
    name: 'warn',
    description: 'warns a mis-behaving user thats being a cunt?',
    usage: 'warn <user> <reason>'
};
