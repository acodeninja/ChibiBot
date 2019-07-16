const answers = [":thumbsup: Oui, c'est sûr!", ":raised_hand: Aucune idée!", ":thumbsdown: Ah non, sûrement pas!"];

module.exports.run = async (bot, message, args) => {
  if (!args[1]) return message.channel.send(":x: Tu dois poser une question!");
  const random = Math.floor(Math.random() * answers.length);
  message.channel.send(answers[random])
};

module.exports.help = {
  name: "8ball"
};
