module.exports = {
    name: 'ready',
    execute(client) {
        try {
            console.log(`Connected as ${client.user.tag}`);
            console.log(`Bot ID: ${client.user.id}`);
            console.log(`Logged in at: ${new Date().toLocaleString()}`);
            
            client.user.setActivity('Type !help for commands', { type: 'WATCHING' });
        } catch (error) {
            console.error('Error in ready event:', error);
        }
    }
};
