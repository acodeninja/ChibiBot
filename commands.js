const fs = require('fs');
const commands = [];

const commandFactory = (command) => {
  const {run} = command;
  const {name} = command.help;

  return {
    name,
    run,
  };
};

const loadCommands = () => {
  fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);

    const commandFiles = files.filter(f => f.indexOf('.js') !== -1);

    commandFiles.forEach((commandFile) => {
      const command = require(`./commands/${commandFile}`);

      commands.push(commandFactory(command));
    });
  });
};

const getCommand = (name) => {
  return commands.find((command) => command.name === name);
};

const getCommandList = () => {
  return commands.map(command => command.name).join(', ');
};

loadCommands();

module.exports.getCommand = getCommand;
module.exports.getCommandList = getCommandList;
