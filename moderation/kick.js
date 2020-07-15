exports.kick = async message => {
if (!message.guild) return;
  
if (message.content.startsWith('$kick')) {
  // Zakładamy, że wspominamy o kimś
  // Przeczytaj więcej o wzmiankach na stronie https://discord.js.org/#/docs/main/master/class/MessageMentions
  const user = message.mentions.users.first();
  // If we have a user mentioned
  if (user) {
    // Teraz zamieniamy użytkownika na członka
    const member = message.guild.member(user);
    // Jeśli członek jest na serwerze
    if (member) {
      /**
       * Wyrzuca członka
       * Upewnij się, że wyrzuciłeś członka nie uzytkownika
       */
      member
        .kick('Optional reason that will display in the audit logs')
        .then(() => {
          // We let the message author know we were able to kick the person
          message.channel.send(`:white_check_mark:**Sukces**`);
        })
        .catch(err => {
          // Wystąpił błąd
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.channel.send(':exclamation:**Błąd**');
          // Log the error
          console.error(err);
        });
    } else {
      // The mentioned user isn't in this guild
      message.channel.send(":exclamation:**Błąd**");
    }
    // Otherwise, if no user was mentioned
  } else {
    message.channel.send(":exclamation:**Błąd**");
  }
}

};