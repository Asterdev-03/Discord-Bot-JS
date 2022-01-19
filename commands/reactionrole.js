module.exports = {
    name: 'reactionrole',
    description: "sets up a reaction role message!",
    async execute(message, args, Discord, client) {

        // Initializing the Team Roles Embed
        const channel = '933373373797527572';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Yellow Team");
        const orangeTeamRole = message.guild.roles.cache.find(role => role.name === "Orange Team");

        const yellowTeamEmoji = '🍋';
        const orangeTeamEmoji = '🍊';

        let embed = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Choose a Team to play on!')
            .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
                + `${yellowTeamEmoji} for yellow team\n\n`
                + `${orangeTeamEmoji} for orange team`);

        let messageEmbed = await message.channel.send({ embeds: [embed] });
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(orangeTeamEmoji);

        // Assigning Team Roles if reacted
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === orangeTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(orangeTeamRole);
                }
            } else {
                return;
            }
        });

        // Unassigning Team Roles if ureacted
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === orangeTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(orangeTeamRole);
                }
            } else {
                return;
            }
        });

    }
}