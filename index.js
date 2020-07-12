const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const client = new Discord.Client();

const queue = new Map();
const welcome = require(`./welcome.js`)
const prefix = "$"
//const commands = "$zaproszenie", "$facebook";




const commands = [
    {
        "name": "$help",
        "description": "Wyświetla tą liste komend"
    },
    {
        "name": "$help moderacja",
        "description": "Wyświetla komendy przydatne dla moderacji"
    },
    {
        "name": "$zaproszenie",
        "description": "Wysyła zaproszenie do dołączenia na serwer"
    },
    {
        "name": "$sklep",
        "description": "Wyświetla sklep serwera z vc, własnymi rangami itd"
    },
    {
        "name": "$serwer",
        "description": "Wyświetla informacje o serwerze"

    },
    {
        "name": "$user-info",
        "description": "Wyświetla informacje o użytkowniku"
    },
    {
        "name": "$hello",
        "description": "Wysyła GIF z machającą ręką"
    }


]

const modehelp = [
    {
        "name": "$kick",
        "description": "Wyrzuca użytkownika z serwera"
    },
    {
        "name": "$ban",
        "description": "Banuje użytkownika"
    },
    {
        "name": "$warn",
        "description": "Daje warna. Przykład: $warn @jankowalski Spam (według kanału regulamin) [OFF]"
    },
    {
        "name": "$mute",
        "description": "Wycisza użytkownika. Przykład: $mute @jankowalski 15s Spam [OFF]"
    }
]

const store = [
    {
        "name": "$kup nick",
        "description": "Zmiana nicku serwerowego **koszt**: 5,000 :money_with_wings:"
    },
    {
        "name": "$kup rola",
        "description": "Własna rola z kolorkiem **koszt**: 100,000 :money_with_wings:"
    },
    {
        "name": "$kup kolor",
        "description": "Zmiana koloru własnej roli **koszt**: 30,000 :money_with_wings:"
    },
    {
        "name": "$kup nazwa",
        "description": "Zmiana nazwy własnej roli **koszt**: 30,000 :money_with_wings:"
    },
    {
        "name": "$kup vc",
        "description": "Własny kanał głosowy **koszt**: 200,000 :money_with_wings:"
    },
    {
        "name": "$kup pojemność",
        "description": "Zwiększenie pojemności własnego kanału **koszt**: 10,000 :money_with_wings:"
    },
    {
        "name": "$kup whitelista",
        "description": "Zwiększenie whitelisty własnego kanału **koszt**: 5,000 :money_with_wings:"
    },
    {
        "name": "$kup vc nazwa",
        "description": "Zmiana nazwy własnego kanału **koszt**: 20,000 :money_with_wings:"
    },
    {
        "name": "$kup unban",
        "description": "Zakup unbana dla znajomego **koszt**: 150,000 :money_with_wings:"
    },
    {
        "name": "$kup unwarn",
        "description": "Usunięcie warna **koszt**: 25,000 :money_with_wings:"
    }
]

const nick = [
    {
        "name": "1",
        "description": "Napisz do mnie na Discordzie, jaki chciałbyś mieć nick"
    },
    {
        "name": "2",
        "description": "Wpłać pieniądze: !give-money @SmileBot 5000"
    },
    {
        "name": "3",
        "description": "Wyślij screena, że wpłaciłeś pieniądze"
    },
    {
        "name": "4",
        "description": "Czekaj, aż twój nick zostanie zmieniony"
    }
]

const role = [
    {
        "name": "1",
        "description": "Napisz do mnie na Discordzie, jaki chciałbyś mieć kolor oraz nazwę własnej roli"
    },
    {
        "name": "2",
        "description": "Wpłać pieniądze: !give-money @SmileBot 100000"
    },
    {
        "name": "3",
        "description": "Wyślij screena, że wpłaciłeś pieniądze"
    },
    {
        "name": "4",
        "description": "Czekaj na własną rolę z kolorkiem"
    }
]

const color = [
    {
        "name": "1",
        "description": "Napisz do mnie na Discordzie, na jaki kolor chciałbyś zmienić swoją rolę"
    },
    {
        "name": "2",
        "description": "Wpłać pieniądze: !give-money @SmileBot 30000"
    },
    {
        "name": "3",
        "description": "Wyślij screena, że wpłaciłeś pieniądze"
    },
    {
        "name": "4",
        "description": "Czekaj na zmianę koloru własnej roli"
    }
]

const name = [
    {
        "name": "1",
        "description": "Napisz do mnie na Discordzie, na jaką nazwę chciałbyś zmienić swoją rolę"
    },
    {
        "name": "2",
        "description": "Wpłać pieniądze: !give-money @SmileBot 30000"
    },
    {
        "name": "3",
        "description": "Wyślij screena, że wpłaciłeś pieniądze"
    },
    {
        "name": "4",
        "description": "Czekaj na zmianę nazwy własnej roli"
    }
]

const voicechat = [
    {
        "name": "1",
        "description": "Napisz do mnie na Discordzie, czy chciałbyś mieć  kanał prywatny z emotkami. Jedna emotka kosztuje 5k"
    },
    {
        "name": "2",
        "description": "Wpłać pieniądze: !give-money @SmileBot 200000"
    },
    {
        "name": "3",
        "description": "Wyślij screena, że wpłaciłeś pieniądze"
    },
    {
        "name": "4",
        "description": "Czekaj na swój własny kanał głosowy"
    },
    {
        "name": "PS",
        "description": "Po informacje dotyczące własnego kanału głosowego zgłoś się do mnie"
    }
]

const value = [
    {
        "name": "1",
        "description": "Napisz do mnie na Discordzie, że chcesz zwiększyć pojemność"
    },
    {
        "name": "2",
        "description": "Wpłać pieniądze: !give-money @SmileBot 10000"
    },
    {
        "name": "3",
        "description": "Wyślij screena, że wpłaciłeś pieniądze"
    },
    {
        "name": "4",
        "description": "Czekaj, aż pojemność twojego kanału zostanie zwiększona"
    }
]

const whitelist = [
    {
        "name": "1",
        "description": "Napisz do mnie na Discordzie, kto ma być w whiteliście kanału"
    },
    {
        "name": "2",
        "description": "Wpłać pieniądze: !give-money @SmileBot 5000"
    },
    {
        "name": "3",
        "description": "Wyślij screena, że wpłaciłeś pieniądze"
    },
    {
        "name": "4",
        "description": "Czekaj, aż whitelista twojego kanału zostanie zwiększona"
    }
]

const voicechatname = [
    {
        "name": "1",
        "description": "Napisz do mnie na Discordzie, jaką nazwę ma mieć twój kanał. Jedna emotka kosztuje 5k"
    },
    {
        "name": "2",
        "description": "Wpłać pieniądze: !give-money @SmileBot 20000"
    },
    {
        "name": "3",
        "description": "Wyślij screena, że wpłaciłeś pieniądze"
    },
    {
        "name": "4",
        "description": "Czekaj, aż nazwa twojego kanału zostanie zmieniona"
    }
]


const unban = [
    {
        "name": "1",
        "description": "Napisz do mnie na Discordzie, dla kogo wykupujesz unbana"
    },
    {
        "name": "2",
        "description": "Wpłać pieniądze: !give-money @SmileBot 150000"
    },
    {
        "name": "3",
        "description": "Wyślij screena, że wpłaciłeś pieniądze"
    },
    {
        "name": "4",
        "description": "Czekaj, aż znajomy dostanie unbana"
    }
]

const unwarn = [
    {
        "name": "1",
        "description": "Napisz do mnie na Discordzie, że chcesz wykupic unwarn"
    },
    {
        "name": "2",
        "description": "Wpłać pieniądze: !give-money @SmileBot 25000"
    },
    {
        "name": "3",
        "description": "Wyślij screena, że wpłaciłeś pieniądze"
    },
    {
        "name": "4",
        "description": "Czekaj, aż usunę ci warna"
    }
]

const invite = [
    {
        "name": "",
        "description": "https://discord.gg/ySyhBbC"
    }
]

//status bota: W grze Alpha 1.1.0 by xxdamixx

client.on("ready",() => {
    console.log("Bot is ready!");
    client.user.setActivity("$help",{type: 'PLAYING'});
})


client.on('guildMemberAdd', welcome.welcome);




client.on('message', async message => {


    if (message.content === "$help"){
        let msg = "";
        for (const command of commands){
            msg += `${command.name} - ${command.description}\n`
        }
        msg = msg.slice(0, -1)
        let embed = new Discord.MessageEmbed().setColor("#CF5AFF").addField("**Aktualna lista komend**", msg);
        message.channel.send(embed)
    }  


    if (message.content === "$help moderacja"){
        let msg = "";
        for (const command of modehelp){
            msg += `${command.name} - ${command.description}\n`
        }
        msg = msg.slice(0, -1)
        let embed = new Discord.MessageEmbed().setColor("#CF5AFF").addField("**Lista komend dla moderacji**", msg);
        message.channel.send(embed)
    }  


    if (message.content === "$sklep"){
        let msg = "";
        for (const command of store){
            msg += `${command.name} - ${command.description}\n`
        }
        msg = msg.slice(0, -1)
        let embed = new Discord.MessageEmbed().setColor("#CF5AFF").addField("**Sklep serwerowy**", msg);
        message.channel.send(embed)
    }  


    if (message.content === "$kup nick"){
        let msg = "";
        for (const command of nick){
            msg += `${command.name}. ${command.description}\n`
        }
        msg = msg.slice(0, -1)
        let embed = new Discord.MessageEmbed().setColor("#CF5AFF").addField("**Szczegóły, jak kupić zmianę nicku serwerowego**", msg);
        message.channel.send(embed)
    }  


    if (message.content === "$kup rola"){
        let msg = "";
        for (const command of role){
            msg += `${command.name}. ${command.description}\n`
        }
        msg = msg.slice(0, -1)
        let embed = new Discord.MessageEmbed().setColor("#CF5AFF").addField("**Szczegóły, jak kupić własną rolę z kolorkiem**", msg);
        message.channel.send(embed)
    }  


    
    if (message.content === "$kup kolor"){
        let msg = "";
        for (const command of color){
            msg += `${command.name}. ${command.description}\n`
        }
        msg = msg.slice(0, -1)
        let embed = new Discord.MessageEmbed().setColor("#CF5AFF").addField("**Szczegóły, jak kupić zmianę koloru własnej roli**", msg);
        message.channel.send(embed)
    }  


    if (message.content === "$kup nazwa"){
        let msg = "";
        for (const command of name){
            msg += `${command.name}. ${command.description}\n`
        }
        msg = msg.slice(0, -1)
        let embed = new Discord.MessageEmbed().setColor("#CF5AFF").addField("**Szczegóły, jak kupić zmianę nazwy własnej roli**", msg);
        message.channel.send(embed)
    }  


    if (message.content === "$kup vc"){
        let msg = "";
        for (const command of voicechat){
            msg += `${command.name}. ${command.description}\n`
        }
        msg = msg.slice(0, -1)
        let embed = new Discord.MessageEmbed().setColor("#CF5AFF").addField("**Szczegóły, jak kupić własny kanał głosowy z whitelistą**", msg);
        message.channel.send(embed)
    }  


    if (message.content === "$kup pojemność"){
        let msg = "";
        for (const command of value){
            msg += `${command.name}. ${command.description}\n`
        }
        msg = msg.slice(0, -1)
        let embed = new Discord.MessageEmbed().setColor("#CF5AFF").addField("**Szczegóły, jak zwiększyć pojemność własnego kanału**", msg);
        message.channel.send(embed)
    }  


    if (message.content === "$kup whitelista"){
        let msg = "";
        for (const command of whitelist){
            msg += `${command.name}. ${command.description}\n`
        }
        msg = msg.slice(0, -1)
        let embed = new Discord.MessageEmbed().setColor("#CF5AFF").addField("**Szczegóły, jak zwiększyć whitelistę własnego kanału**", msg);
        message.channel.send(embed)
    }  


    
    if (message.content === "$kup vc nazwa"){
        let msg = "";
        for (const command of voicechatname){
            msg += `${command.name}. ${command.description}\n`
        }
        msg = msg.slice(0, -1)
        let embed = new Discord.MessageEmbed().setColor("#CF5AFF").addField("**Szczegóły, jak zmienić nazwę własnego kanału**", msg);
        message.channel.send(embed)
    }  


    if (message.content === "$kup unban"){
        let msg = "";
        for (const command of unban){
            msg += `${command.name}. ${command.description}\n`
        }
        msg = msg.slice(0, -1)
        let embed = new Discord.MessageEmbed().setColor("#CF5AFF").addField("**Szczegóły, jak kupić unban dla znajomego**", msg);
        message.channel.send(embed)
    }  


    
    if (message.content === "$kup unwarn"){
        let msg = "";
        for (const command of unwarn){
            msg += `${command.name}. ${command.description}\n`
        }
        msg = msg.slice(0, -1)
        let embed = new Discord.MessageEmbed().setColor("#CF5AFF").addField("**Szczegóły, jak kupić unwarn**", msg);
        message.channel.send(embed)
    }
    
    
    if (message.content === "$zaproszenie"){
        let msg = "";
        for (const command of invite){
            msg += `${command.name} ${command.description}\n`
        }
        msg = msg.slice(0, -1)
        let embed = new Discord.MessageEmbed().setColor("#CF5AFF").addField("**Zaproszenie na serwer**", msg);
        message.channel.send(embed)
    }  

    if (message.content === `$serwer`) {
        message.channel.send(`Nazwa serwera: ${message.guild.name}\nRazem osób: ${message.guild.memberCount}`);
    }

    if (message.content === `$user-info`) {
        message.channel.send(`Twój nick: ${message.author.username}\nTwoje ID: ${message.author.id}\nTwój nick i tag: ${message.author.tag}\nUtworzyłeś konto: ${message.author.createdAt}`);
    }

    if (message.content.startsWith("$hello")) {
        message.channel.send({files: ['wave.gif']});
    }


    if (message.content === "14")return (message.channel.send = "Oj tak byczq +1")

    





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
  
  


    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // if the message content starts with "!ban"
    if (message.content.startsWith('$ban')) {
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
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
           */
          member
            .ban({
              reason: 'They were bad!',
            })
            .then(() => {
              // We let the message author know we were able to ban the person
              message.channel.send(`:white_check_mark:**Sukces**`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to ban the member,
              // either due to missing permissions or role hierarchy
              message.channel.send(':exclamation:**Błąd**');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.channel.send(":exclamation:**Błąd**");
        }
      } else {
        // Otherwise, if no user was mentioned
        message.channel.send(":exclamation:**Błąd**");
      }
    }

    let blacklisted = ["ameryka", "orgazm", "gz", "chuj", "japierdole", "spierdalaj", "Nexe", "spierdalam", "podszywasz", "neoney"]
    let foundInText = false;
    for(var i in blacklisted) {
        if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true
    }

    if(foundInText) {
        message.delete();
        message.channel.send("")
        .then(m => m.delete(10000));
    }




    

     
  });

client.login(process.env.BOT_TOKEN);
