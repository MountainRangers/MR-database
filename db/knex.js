var environment = 'development';
var config = require('../kenxfile.js')[environment];
module.exports = ('knex')(config)
