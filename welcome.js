exports.welcome = member => {
    // Wyślij wiadomość do wspomnianego kanału na serwerze
    const channel = member.guild.channels.cache.find(ch => ch.name === '👋witajcie-na-serwerze');
    // Nie rób nic, jeśli danego kanału nie znaleziono na serwerze
    if (!channel) return;
    // Wyślij wiadomość wspominając członka
    channel.send(`Witaj na serwerze, ${member}. Nie zapomnij przeczytać kanału <#720731754507272294>. \nJesteś naszym ${member.guild.memberCount} członkiem`);

  }