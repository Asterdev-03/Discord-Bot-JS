module.exports = {
    name: 'unmute',
    description: "to unmute a member",
    execute(message, args) {

        // Taking the member who is mentioned
        const target = message.mentions.users.first();

        // Initializing the roles that is to be switched
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
            let memberTarget = message.guild.members.cache.get(target.id);

            // To unmute the member
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);

            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else {
            message.channel.send('Cannot find that member!');
        }
    }
}