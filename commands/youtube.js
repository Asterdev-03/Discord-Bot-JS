module.exports = {
    name: 'youtube',
    description: "sends the youtube link",
    execute(message, args) {

        // Checking whether member has a specific permission using permission flags
        if(message.member.permissions.has("KICK_MEMBERS")) {
            message.channel.send("You have permission to kick");
        } else {
            message.channel.send("You DONT have the permission to kick");
        }

        // Checking whether member has a specific role using role id
        if(message.member.roles.cache.has('932315137434603540')) {
            message.channel.send('http://youtube.com/');
        }
        else {
            message.channel.send('I see you dont have the role, let me change that');
            message.member.roles.add('932315137434603540').catch(console.error);
        }
    }
}