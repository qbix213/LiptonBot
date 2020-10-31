exports.leave = member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '「👋」witajcie');
    if (!channel) return;
    channel.send(`Niestety ${member} od nas odszedł. Żegnaj, będziemy o tobie pamiętać`);

  }