const moment = require('moment');

const users = [];
module.exports.format = (username, text) => ({username, text, time: moment().format('h:mm a')})