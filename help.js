const Discord = require("discord.js");
const help = [
    {
        "name": "$help",
        "description": "Wyświetla tą liste komend"
    },
    {
        "name": "$moderacja",
        "description": "Wyświetla komendy przydatne dla moderacji"
    },
    {
        "name": "$zaproszenie",
        "description": "Wysyła zaproszenie do dołączenia na serwer"
    },
    {
        "name": "$sklep",
        "description": "Wyświetla sklep serwera z vc, własnymi rangami itd"
    }


]

const moderationhelp = [
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
        "description": "Wycisza użytkownika."
    }
]

exports.help = message => {
    if (message.content === "$help"){
        let msg = "";
        for (const command of help){
            msg += `${command.name} - ${command.description}\n`
        }
        msg = msg.slice(0, -1)
        let embed = new Discord.MessageEmbed().setColor("#1714B6").addField("**Aktualna lista komend**", msg);
        message.channel.send(embed)
    }  

    if (message.content === "$moderacja"){
        let msg = "";
        for (const command of moderationhelp){
            msg += `${command.name} - ${command.description}\n`
        }
        msg = msg.slice(0, -1)
        let embed = new Discord.MessageEmbed().setColor("#1714B6").addField("**Lista komend dla moderacji**", msg);
        message.channel.send(embed)
    }  
    
    };