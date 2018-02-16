const Discord = require("discord.js");
var bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setGame('Zinaria by SkyOxY');
    console.log('Zinaria est pret !');
});

bot.login('NDEzODE5NzY4OTc0NDc1MjY1.DWgr4g.GzFVrc5-wmPTO91yv8CdFwj-k5E');
