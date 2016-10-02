/**
 * Created by amila on 10/2/16.
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var order = connection.define();

module.exports = order;