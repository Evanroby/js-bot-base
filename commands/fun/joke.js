const jokes = [
    "Why don't skeletons fight each other? They don't have the guts!",
    "I'm on a whiskey diet. I've lost three days already.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet."
];

module.exports = {
    name: 'joke',
    description: 'Tells a random joke.',
    execute(message) {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        message.reply(randomJoke);
    }
};
