exports.leave = member => {
    // Wyślij wiadomość do wspomnianego kanału na serwerze
    const channel = member.guild.channels.cache.find(ch => ch.name === '👋witajcie-na-serwerze');
    // Nie rób nic, jeśli danego kanału nie znaleziono na serwerze
    if (!channel) return;
    // Wyślij wiadomość wspominając członka
    channel.send(`Niestety ${member} od nas odszedł. Żegnaj, będziemy o tobie pamiętać`);

  }