// Ignore messages that aren't from a guild
if (!message.guild) return;
  
// If the message content starts with "!kick"
if (message.content.startsWith('$kick')) {
  // Assuming we mention someone in the message, this will return the user
  // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
  const user = message.mentions.users.first();
  // If we have a user mentioned
  if (user) {
    // Now we get the member from the user
    const member = message.guild.member(user);
    // If the member is in the guild
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
          // An error happened
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