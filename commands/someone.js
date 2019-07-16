module.exports.run = async (bot, message, args) => {
  let user = message.guild.members.random();
  while (user.user.bot) user = message.guild.members.random();
  message.channel.send(`:thinking: C'est sûrement ${user}!`)
};

module.exports.help = {
  name: "someone"
};
