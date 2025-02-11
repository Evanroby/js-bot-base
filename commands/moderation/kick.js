module.exports = {
    name: 'kick',
    description: 'Kicks a user from the server.',
    execute(message, args) {
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.reply("You don't have permission to kick members!");
        }

        const user = message.mentions.users.first();
        if (!user) {
            return message.reply("You need to mention a user to kick.");
        }

        const member = message.guild.members.cache.get(user.id);
        if (!member) {
            return message.reply("User not found in this server.");
        }

        member.kick()
            .then(() => message.reply(`${user.tag} has been kicked!`))
            .catch(error => {
                console.error(error);
                message.reply("I couldn't kick this user.");
            });
    }
};
