module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setURL('http://youtube.com')
        .setDescription('This is a Embed for server rules')
        .addFields(
            {name: 'Rule 1', value: 'Be nice'},
            {name: 'Rule 2', value: 'No memes'},
            {name: 'Rule 3', value: 'Follow LinkedIn'}
        )
        .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/330px-Cat03.jpg')
        .setFooter('Make sure to check the rules channel');
        
        message.channel.send({embeds: [newEmbed]});
    }
}