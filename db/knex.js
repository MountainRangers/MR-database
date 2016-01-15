var environment = process.env.NODE_ENV || 'development';
var config = require('../kenxfile.js')[environment];
module.exports = ('knex')(config);
