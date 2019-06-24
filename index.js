const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.lenght <= 0){
    console.console.log("Couldn't find commands.");
    return;
  }
  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is ready!`);
  bot.user.setActivity("ChibiWorld! | c!help", {type: "WATCHING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});

bot.login(process.env.BOT_TOKEN);
