/**
 * Created by User on 9/9/2016.
 * developer: -Kasun
 * use as map for all the controllers allocating
 */
var Controllers = {};

Controllers.UserController = require('./ModuleControllers/UserController');
Controllers.OrderController = require('./ModuleControllers/OrderController');
module.exports = Controllers;
