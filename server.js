const dbd = require("dbd.js");

const bot = new dbd.Bot({
  token: "TOKEN",
  prefix: "PREFIX"
});

bot.onMessage();

//command handler

const fs = require("fs");

const folders = fs.readdirSync("./commands/");

for (const files of folders) {
  const folder = fs
    .readdirSync(`./commands/${files}/`)
    .filter(file => file.endsWith(".js"));

  for (const commands of folder) {
    const command = require(`./commands/${files}/${commands}`);
    bot.command({
      name: command.name,
      code: command.code,
      aliases: command.aliases
    });
    
    //bot status

    bot.status({
      text: "1st bot status",
      type: "WATCHING",
      time: 3
    });

    bot.status({
      text: "2nd bot status",
      type: "PLAYING",
      time: 3
    });

    bot.status({
      text: "3rd bot status",
      type: "PLAYING",
      time: 3
    });
    
        bot.status({
      text: "4th bot status",
      type: "STREAMING",
      time: 3
    });
  }
}
