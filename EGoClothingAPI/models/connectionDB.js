// Load module
var mysql = require('mysql');
let config = require('config');

let DB_CONFIG_LOCAL = config.get('Local.dbConfig');
// let DB_CONFIG_PRODUCTION = config.get('Production.dbConfig');


var pool      =    mysql.createPool(DB_CONFIG_LOCAL);
module.exports = pool;