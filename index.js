const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const path = require('path');
const config = require('./config.json');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions
    ]
});

client.commands = new Collection();

the const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath, { withFileTypes: true });

commandFiles.forEach(dir => {
    if (dir.isDirectory()) {
        const files = fs.readdirSync(path.join(commandsPath, dir.name)).filter(file => file.endsWith('.js'));
        for (const file of files) {
            const command = require(`./commands/${dir.name}/${file}`);
            client.commands.set(command.name, command);
        }
    }
});

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}

client.login(config.token);

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});
