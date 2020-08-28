const MenuDocsClient = require('./Structures/menudocsclient.js');
const config = require('../config.json');

const client = new MenuDocsClient(config);
client.start();
