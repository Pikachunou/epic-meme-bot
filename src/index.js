const MenuDocsClient = require('./Structures/menudocsclient')
const config = require('../config.json');

const client = new MenuDocsClient(config);
client.start();