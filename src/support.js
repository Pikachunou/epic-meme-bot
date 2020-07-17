const Command = require('../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['support']
		});
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		message.channel.send('here is the support server sir/madam https://discord.gg/EHhhwPE');
	}

};