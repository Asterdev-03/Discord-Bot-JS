const Discord = require('discord.js');

const client = new Discord.Client({intents: ['GUILD_MESSAGES', 'GUILDS']});

const prefix = '-';

client.once('ready', () => {
    console.log('Albega is online!');
});

// To Add Logic to the User's Commands
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/_+/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        message.channel.send('pong!');
    }
})

// Token Key of the Bot
client.login('ZTMyMjc0MTU3MDc1NDM5NjY2.YeQl9w.X2YYWbOvocSjNuXQpswNeEcx7PZ');
