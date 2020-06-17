const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
//const commands = "$zaproszenie", "$facebook";

const commands = [
    {
        "name": "$help",
        "description": "Wyświetla tą liste komend"
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
        "description": "Wpłać pieniądze: !give-money @LiptonawkaBot 5000"
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
        "description": "Wpłać pieniądze: !give-money @LiptonawkaBot 100000"
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
        "description": "Wpłać pieniądze: !give-money @LiptonawkaBot 30000"
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
        "description": "Wpłać pieniądze: !give-money @LiptonawkaBot 30000"
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
        "description": "Wpłać pieniądze: !give-money @LiptonawkaBot 200000"
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
        "description": "Wpłać pieniądze: !give-money @LiptonawkaBot 10000"
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
        "description": "Wpłać pieniądze: !give-money @LiptonawkaBot 5000"
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
        "description": "Wpłać pieniądze: !give-money @LiptonawkaBot 20000"
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
        "description": "Wpłać pieniądze: !give-money @LiptonawkaBot 150000"
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
        "description": "Wpłać pieniądze: !give-money @LiptonawkaBot 25000"
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
//status bota: W grze Alpha 1.1.0 by xxdamixx

client.on("ready",() => {
    console.log("Bot is ready!");
    client.user.setActivity("Alpha 1.1.0 by xxdamixx",{type: 'PLAYING'});
})



client.on('message', async message => {
    if (message.content === "$zaproszenie")  message.channel.send("Zaproszenie na serwer: https://discord.gg/ySyhBbC")
    if (message.content === "$facebook") message.channel.send("Ta komenda nie jest narazie dostępna")


    if (message.content === "$help"){
        let msg = "";
        for (const command of commands){
            msg += `${command.name} - ${command.description}\n`
        }
        msg = msg.slice(0, -1)
        let embed = new Discord.MessageEmbed().setColor("#CF5AFF").addField("**Aktualna lista komend**", msg);
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


    
})

client.login(config.token);