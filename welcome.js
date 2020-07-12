exports.welcome = member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === '👋witajcie-na-serwerze');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Witaj na serwerze, ${member}. Nie zapomnij przeczytać kanału <#720731754507272294>`);

  }