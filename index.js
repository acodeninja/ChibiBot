const {Client} = require('discord.js');
const config = require('./config');
const commands = require('./commands');

const client = new Client();

client.on("ready", async () => {
  client.user.setPresence({status: 'online'})
    .then(() => {
      console.log('Bot Online!');
      console.log('Modules Loaded:', commands.getCommandList())
    })
    .catch(console.error);
});

client.on("message", async message => {
  if (
    message.author.bot
    || message.channel.type === "dm"
    || message.content.indexOf(config.prefix) !== 0
  ) return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let command = commands.getCommand(cmd.slice(config.prefix.length));
  if (command) command.run(client, message, args);
});

client.login(config.token);
