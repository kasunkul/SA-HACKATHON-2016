/**
 * Created by User on 9/6/2016.
 * Develop: Kasun
 * Registry of the model and every model have to register here
 */
var Models = {};

Models.User = require('./entity/User');
Models.Food = require('./entity/Food');
Models.Order = require('./entity/Order');

module.exports = Models;