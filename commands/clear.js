module.exports = {
    name: 'clear',
    description: "clear a certain amount",
    async execute(message, args) {
        if(!args[0]) return message.reply('please enter the amount of messages to be cleared!');
        if(isNaN(args[0])) return message.reply('please enter a real number!');
        
        if(args[0] > 100) return message.reply('You cannot delete more than 100 messages!');
        if(args[0] < 1) return message.reply('You must delete atleast one message!');
        

        // it first fetches all the messages including the command message and then deletes them !
        await message.channel.messages.fetch({limit : args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        })
    }
}