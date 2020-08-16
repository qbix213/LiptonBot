const { otherRegexes } = require('./helpers');

const mutedRoleID = '732527085016580156';

exports.mute = (msg) => {
  if (!msg.content.startsWith("$mute")) return;
const args = msg.content.split(" ")
const user = msg.guild.members.cache.find(u => u.user === msg.mentions.users.first());
if (!user) {
  msg.channel.send('Nie znaleziono użytkownika, którego wspomniałeś!')
  return;
}





  if (!msg) {
    msg.channel.send('Wystąpił błąd podczas wyciszania!')
    console.log('Mute: msg is null/undefined');
    return;
  }



  const mutedRole = msg.guild.roles.cache.find(r => r.id === mutedRoleID);

  if (user.roles.cache.find(r => r === mutedRole)) {
    msg.channel.send('Użytkownik jest już wyciszony!');
    return;
  }

  if (!msg.member.hasPermission('MANAGE_ROLES')) {
    msg.channel.send('Nie możesz wyciszać użytkowników!')
    return;
  }

  if (!msg.guild.member(msg.client.user).hasPermission('MUTE_MEMBERS')) {
    msg.channel.send('Wystąpił błąd podczas wyciszania!')
    console.log('Unmute: I don\'t have enough permissions')
    return;
  }

  if (user.user.bot) {
    msg.channel.send('Nie możesz wyciszyć bota!')
    return;
  }
const interval = args[2] 
  if (!interval) {
    msg.channel.send('Wystąpił błąd podczas wyciszania!')
    console.log('Mute: interval has not been provided');
    return;
  }

  let intervalMs;

  if (interval.endsWith('s'))
    intervalMs = interval.match(otherRegexes.numberFromInterval)[1] * 1000;

  else if (interval.endsWith('min'))
    intervalMs = interval.match(otherRegexes.numberFromInterval)[1] * 60000;

  else if (interval.endsWith('h'))
    intervalMs = interval.match(otherRegexes.numberFromInterval)[1] * 3600000;

  else if (interval.endsWith('d'))
    intervalMs = interval.match(otherRegexes.numberFromInterval)[1] * 86400000;

  else if (interval.endsWith('mth'))
    intervalMs =
      interval.match(otherRegexes.numberFromInterval)[1] * 2592000000;

  else if (interval.endsWith('y'))
    intervalMs =
      interval.match(otherRegexes.numberFromInterval)[1] * 31536000000;

const reason = args.slice(3).join(" ")

  user.roles.add(mutedRole);
  setTimeout(() => {
    if (user.roles.cache.find(r => r === mutedRole)) {
      user.roles.remove(mutedRole);

      user.createDM()
        .then(dm => dm.send(`Okres twojego wyciszenia na serwerze ` +
          `*${msg.guild.name}* minął.`))
        .catch(e => console.log(`Unmute: Could not send DM: ${e}`));
    }
  }, intervalMs);

  user.createDM()
    .then(dm => dm.send(`Zostałeś wyciszony na okres ${interval} ` +
      `na serwerze *${msg.guild.name}*: ` + (reason || '(Brak powodu)')))
    .catch(e => console.log(`Mute: Could not send DM: ${e}`));

  msg.channel.send(`Użytkownik <@!${user.id}> został wyciszony na okres ` +
    `${interval}: ` + (reason || '(Brak powodu)'));
};


exports.unmute = (msg, user) => {
  if (!msg) {
    msg.channel.send('Wystąpił błąd podczas odciszania!')
    console.log('Unmute: msg is null/undefined');
    return;
  }

  user = msg.guild.members.cache.find(u =>
    u.id === user.match(otherRegexes.idFromTag)[1]);

  if (!user) {
    msg.channel.send('Nie znaleziono użytkownika, którego wspomniałeś!')
    return;
  }

  const mutedRole = msg.guild.roles.cache.find(r => r.id === mutedRoleID);

  if (!user.roles.cache.find(r => r === mutedRole)) {
    msg.channel.send('Użytkownik nie jest wyciszony!');
    return;
  }

  if (!msg.member.hasPermission('MANAGE_ROLES')) {
    msg.channel.send('Nie możesz odciszać użytkowników!')
    return;
  }

  if (!msg.guild.member(msg.client.user).hasPermission('MUTE_MEMBERS')) {
    msg.channel.send('Wystąpił błąd podczas odciszania!')
    console.log('Unmute: I don\'t have enough permissions')
    return;
  }

  if (user.user.bot) {
    msg.channel.send('Nie możesz odciszyć bota!')
    return;
  }

  user.roles.remove(mutedRole);

  user.createDM()
    .then(dm => dm.send(`Zostałeś odciszony na serwerze *${msg.guild.name}*.`))
    .catch(e => console.log(`Unmute: Could not send DM: ${e}`));

  msg.channel.send(`Użytkownik <@!${user.id}> został odciszony.`);
};