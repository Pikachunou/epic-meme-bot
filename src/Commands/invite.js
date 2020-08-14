const Command = require('../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['invite']
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		message.channel.send('Invite me to your server! <https://discord.com/api/oauth2/authorize?client_id=725768904458371142&permissions=0&scope=bot>');
	}

};