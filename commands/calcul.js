const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(args[0] === "+"){
      try {
        var values = args;
        values.shift();
        console.log(values.join(" "));
        var sum = 0;
        args.forEach((value) => {
          sum += parseFloat(value);
          console.log(value);
        })
        if(isNaN(sum)) return message.channel.send(":x: Mauvaise syntaxe.");
        message.channel.send(`Facile, ${args.join(" + ")} ca fait ${sum.toString()}!`);
      } catch (e) {
        message.channel.send(":x: Mauvaise syntaxe.")
        console.log(e.stack);
      }
    }
    if(args[0] === "-"){
      try {
        var values = args;
        values.shift();
        console.log(values.join(" "));
        var sum = args[0];
        var argsTemp = args.join(" - ");
        values.shift();
        args.forEach((value) => {
          sum = sum - parseFloat(value);
          console.log(value);
        })
        if(isNaN(sum)) return message.channel.send(":x: Mauvaise syntaxe.");
        message.channel.send(`Facile, ${argsTemp} ca fait ${sum}!`);
      } catch (e) {
        message.channel.send(":x: Mauvaise syntaxe.")
        console.log(e.stack);
      }
    }
    if(args[0] === "x"){
      try {
        var values = args;
        values.shift();
        console.log(values.join(" "));
        var sum = 1;
        args.forEach((value) => {
          sum *= parseFloat(value);
          console.log(value);
        })
        if(isNaN(sum)) return message.channel.send(":x: Mauvaise syntaxe.");
        message.channel.send(`Facile, ${args.join(" x ")} ca fait ${sum}!`);
      } catch (e) {
        message.channel.send(":x: Mauvaise syntaxe.")
        console.log(e.stack);
      }
    }
}

module.exports.help = {
  name: "calcul"
}
