exports.welcome = member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '「👋」witajcie');
    if (!channel) return;
    channel.send(`Witaj na serwerze, ${member}. Nie zapomnij przeczytać kanału <#720731754507272294>. \nJesteś naszym ${member.guild.memberCount} członkiem`);


}