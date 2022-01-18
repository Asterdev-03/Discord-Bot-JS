const ms = require('ms');

module.exports = {
    name: 'mute',
    description: "to mute a member",
    execute(message, args) {

        // Taking the member who is mentioned
        const target = message.mentions.users.first();

        // Initializing the roles that is to be switched
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
            let memberTarget = message.guild.members.cache.get(target.id);

            // If there is no argument for the timer -> hard mute the member 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }

            // To mute the member for specific time
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

            // To unmute the member after a specific time
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));

        } else {
            message.channel.send('Cannot find that member!');
        }
    }
}