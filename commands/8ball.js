const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var awnsers = [":thumbsup: Oui, c'est sûr!", ":raised_hand: Aucune idée!", ":thumbsdown: Ah non, sûrement pas!"]
    if(!args[1]) return message.channel.send(":x: Tu dois poser une question!");
    var random =Math.floor(Math.random() * awnsers.length);
    message.channel.send(awnsers[random])
}

module.exports.help = {
  name: "8ball"
}
