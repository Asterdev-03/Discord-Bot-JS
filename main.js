const Discord = require('discord.js');

const client = new Discord.Client({intents: ['GUILD_MESSAGES', 'GUILDS']});

client.once('ready', () => {
    console.log('Albega is online!');
});

client.login('OTMyMjc0MTU3MDc1NDM5NjY2.YeQl9w.6i7oqlNug1WL38whe0VHxE2WZPY');
