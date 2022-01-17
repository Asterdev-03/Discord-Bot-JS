const Discord = require('discord.js');

const client = new Discord.Client({intents: ['GUILD_MESSAGES', 'GUILDS']});
// prefix of the user's commands to call the bot
const prefix = '-';

const fs = require('fs');

// Collection to store all the commands
client.commands = new Discord.Collection();

// Checkinng whether command file is .js or not
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('Albega is online!');
});

// To Add Logic to the User's Commands
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/_+/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if(command == 'youtube') {
        client.commands.get('youtube').execute(message, args);
    }
})

// Token Key of the Bot
client.login('ZTMyMjc0MTU3MDc1NDM5NjY2.YeQl9w.X2YYWbOvocSjNuXQpswNeEcx7PZ');
