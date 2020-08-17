const { MessageEmbed } = require('discord.js')
exports.embeds = async message => {
    // If the message is "how to embed"
    if (message.content === '$ja') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
      const embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor(0x1714B6)
        .setDescription('Hello, this is a slick embed!');
      message.channel.send(embed);
    }

    if (message.content === '$profil') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
      const embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor(0x1714B6)
        .setDescription('Hello, this is a slick embed!');
      message.channel.send(embed);
    }

    if (message.content === '$profile') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
      const embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor(0x1714B6)
        .setDescription('Hello, this is a slick embed!');
      message.channel.send(embed);
    }


  };