exports.run = (bot, message) => {
    message.editEmbed(
        bot.utils.embed('', 'Please change your username or you may get banned from LSI.', [], {})
            .setAuthor('LS Invest', `${message.author.avatarURL}`)
			.setColor(0xFF0000)
      .setThumbnail('http://i.imgur.com/z28dxNp.png/')
    );
};

exports.info = {
    name: 'name',
    description: 'LSI offensive names',
    usage: 'name',
    credits: 'fOCUSrEACHER17'
};
