const Discord = require('discord.js');

const client = new Discord.Client(
    { intents: ['GUILD_MESSAGES', 'GUILDS', 'GUILD_MEMBERS'] },
    { partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER'] }
);

// Prefix of the user's commands to call the bot
const prefix = '-';

const fs = require('fs');

// Collection to store all the commands
client.commands = new Discord.Collection();

// Checkinng whether command file is .js or not
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// Surfing through all command files
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('Albega is online!');
});

// To welcome new members and giving them 'member' role
client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');

    guildMember.roles.add(welcomeRole);

    guildMember.guild.channels.cache.get('869442841431142450').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check rules channel...`);
});

// To Add Logic to the User's Commands
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // To execute the commands
    if (command === 'ping') {
        client.commands.get('ping').execute(message, args, Discord);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }
})

// Token Key of the Bot
client.login('OTMyMjc0MTU3MDc1NDM5NjY2.YeQl9w.X2YYWbOvocSjNuXQpswNeEcx7PU');
