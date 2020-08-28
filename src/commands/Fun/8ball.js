 const Command = require('../../Structures/Command');

const answers = [
    'Maybe.',
    'Certainly not.',
    'I hope so.',
    'Have fun trying.',
    'I think not',
    'Yep.',
    'Yes!',
    'Never.',
    'There is a small chance',
    'I hope not',
    'Possibly',
    'Who even cares now?',
    'pffft.',
    'Really?'
];

module.exports = class extends Command { 

    constructor(...args) {
        super(...args, {
            aliases : ['eightball', '8balls'],
            description: 'Fun 8ball command!',
            category: 'Fun'
        });
   }

    async run(msg, ...question) {
        return msg.reply(question.join(' ').endsWith('?') ?
        `🎱 ${answers[Math.floor(Math.random() * answers.length)]}` :
        `🎱 That doesn\'t seem to be a question, please try again` )
    }
};