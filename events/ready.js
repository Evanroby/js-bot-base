module.exports = {
    name: 'ready',
    execute(client) {
        console.log(`Connected as ${client.user.tag}`);
    }
};
