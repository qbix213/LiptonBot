exports.ban = ('message', async message => {
// Zignoruj wiadomości, których nie ma na serwerze
if (!message.guild) return;
  
// Jeśli treść wiadomości rozpoczyna się "$ban"
if (message.content.startsWith('$ban')) {
  // Zakładamy, że wspominamy o kimś w wiadomości
  // Przeczytaj więcej o wzmiankach na stronie https://discord.js.org/#/docs/main/master/class/MessageMentions
  const user = message.mentions.users.first();
  // Jeśli mamy wspomnianego użytkownika
  if (user) {
    // Teraz zamieniamy członka na użytkownika
    const member = message.guild.member(user);
    // Jeśli członek jest na serwerze
    if (member) {
      /**
       * Banuje członka serwera
       * Upewnij się, że to członek serwera, a nie użytkownik
       * Jest duża różnica pomiędzy członkiem serwera, a użytkownikiem
       * Przeczytaj więcej o opcjach bana na:
       * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
       */
      member
        .ban({
          reason: 'They were bad!',
        })
        .then(() => {
          // Informujemy autora wiadomości, że pomyślnie udało się zbanować daną osobę
          message.channel.send(`:white_check_mark:**Sukces**`);
        })
        .catch(err => {
          // Wystąpił błąd
          // Jest na ogół spowodowane tym, że bot nie może zbanować członka
          // Z powodu brakujących uprawnień lub hierarchi ról
          message.channel.send(':exclamation:**Błąd**');
          // Pokaż błąd w logach
          console.error(err);
        });
    } else {
      // Wspomnianego użytkownika nie ma na serwerze
      message.channel.send(":exclamation:**Błąd**");
    }
  } else {
    // W przeciwnym razie, jeśli nie wspomniano o żadnym użytkowniku
    message.channel.send(":exclamation:**Błąd**");
  }
}

});