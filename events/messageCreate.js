const config = require('../config.json');

module.exports = {
    name: 'messageCreate',
    execute(message, client) {
        if (!message.content.startsWith(config.prefix) || message.author.bot) return;

        const args = message.content.slice(config.prefix.length).trim().split(/\s+/);
        const commandName = args.shift().toLowerCase();

        if (!client.commands.has(commandName)) return;

        try {
            client.commands.get(commandName).execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('Il y a eu une erreur en exécutant cette commande!');
        }
    }
};
