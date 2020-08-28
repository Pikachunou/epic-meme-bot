const Command = require('../../Structures/Command');
const figlet = require('util').promisify(require('figlet'));

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases : ['Banners'],
            description: 'Turns text into a banner!',
            category: 'Fun'
        });
   }

    async run(msg, ...banner) {
        return msg.channel.send(await figlet(banner), { code: true });
    }

};