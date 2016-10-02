/**
 * Created by User on 9/18/2016.
 * Develop: Pasindu
 * Model: User
 */
var Sequelize = require('sequelize');
var connection = require('./../Connection');

var Order = connection.define('Order', {
    orderPayment: Sequelize.STRING,
    orderCustomerName: Sequelize.STRING,
    oderStatus: Sequelize.STRING
}, {
    tableName: 'order',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Order;
