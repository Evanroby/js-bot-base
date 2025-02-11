const fetch = require('node-fetch');

module.exports = {
    name: 'meme',
    description: 'Sends a random meme from Reddit.',
    async execute(message) {
        try {
            const response = await fetch('https://www.reddit.com/r/memes/random/.json');
            const json = await response.json();
            const meme = json[0].data.children[0].data;

            message.channel.send({ content: meme.title, files: [meme.url] });
        } catch (error) {
            console.error(error);
            message.reply("Couldn't fetch a meme right now.");
        }
    }
};
