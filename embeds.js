const { MessageEmbed } = require('discord.js')
exports.embeds = async message => {
    // If the message is "how to embed"
    if (message.content === '$embed') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
      const embed = new MessageEmbed()
        .setTitle('A slick little embed')
        .setColor(0xff0000)
        .setDescription('Hello, this is a slick embed!');
      message.channel.send(embed);
    }

  };