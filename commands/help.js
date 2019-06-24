const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.author.send({embed: {
      color: 0x3fa3ea,
      title: "Hey salut :smiley: je suis Chibi Bot",
      description: "Voici les commandes que tu pourras faire!",
      fields: [{
          name: "**Informations:**",
          value: "Mon préfix: \"c!\"\n- c!help"
        },
        {
          name: "**Musique**",
          value: "- c!play [nom de la musique]\n- c!pause\n- c!play\n- c!replay\n- c!stop"
        },
        {
          name: "**Modération**",
          value: "- c!ticket\n- c!report"
        },
        {
          name: "**Autre**",
          value: "- c!calcul [+|-|x] [nombres]\n- c!someone [description de quelqun]\n- c!8ball [question]"
        },
        {
          name: "**Mes serveurs**",
          value: "- Chibi World: <https://discord.gg/eb3ZpqD>\n- Chibi Compagny (liste des serveurs): <https://discord.gg/XeETFfr>"
        },
        {
          name: "**Créé par**",
          value: "4MBR3 M4 F3MM3 F0R3V3R#4989: programme\nAntix 727#4088: règles, avatar"
        }
      ]}
    });
    message.channel.send(":thumbsup: L'aide t'a été envoyée en message privés!")
}

module.exports.help = {
  name: "help"
}
