module.exports = {
    name: 'ban',
    description: 'Bans a user from the server.',
    execute(message, args) {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.reply("You don't have permission to ban members!");
        }

        const user = message.mentions.users.first();
        if (!user) {
            return message.reply("You need to mention a user to ban.");
        }

        const member = message.guild.members.cache.get(user.id);
        if (!member) {
            return message.reply("User not found in this server.");
        }

        member.ban()
            .then(() => message.reply(`${user.tag} has been banned!`))
            .catch(error => {
                console.error(error);
                message.reply("I couldn't ban this user.");
            });
    }
};
