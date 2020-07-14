const { mute, unmute } = require('./mute');

const prefix = '$';
const commands = [
  {
    name: 'warn',
    regex: /^warn +(<@![0-9]{18}>) ?(.+ ?)*$/,
    startsWith: 'warn',
    using: `${prefix}warn <@wzmianka> [<powód>]`
  },
  {
    name: 'mute',
    regex: /^mute +(<@![0-9]{18}>) +([0-9]+(?:s|min|h|d|mth|y)) ?(.+ ?)*$/,
    startsWith: 'mute',
    using: `${prefix}mute <@wzmianka> <czas (s/min/h/d/mth/y)> [<powód>]`
  },
  {
    name: 'unmute',
    regex: /^unmute +(<@![0-9]{18}>)$/,
    startsWith: 'unmute',
    using: `${prefix}unmute <@wzmianka>`
  }
];

const matchCommand = cmd => {
  if (cmd.length < 2 || !cmd.startsWith(prefix))
    return;

  cmd = cmd.substring(1);

  let matches;
  for (const command of commands) {
    if (matches = cmd.match(command.regex)) {
      return {
        command,
        matches
      };
    } else if (cmd.startsWith(command.startsWith)) {
      return {
        error: 'INVALID_COMMAND',
        command
      }
    }
  }

  return;
};

exports.newMessage = async msg => {
  const match = matchCommand(msg.content);
  if (!match) return;

  if (match.error && match.error === 'INVALID_COMMAND') {
    msg.channel.send(`Użycie:\n${match.command.using}`);
    return;
  }

  switch (match.command.name) {
    case 'warn':
      break;

    case 'mute':
      mute(msg, match.matches[1], match.matches[2], match.matches[3]);
      break;

     case 'unmute':
      unmute(msg, match.matches[1], match.matches[2]);
      break;
  }
};