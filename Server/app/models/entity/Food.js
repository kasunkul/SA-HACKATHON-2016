/**
 * Created by amila on 10/2/16.
 */
/**
 * Created by User on 9/18/2016.
 * Develop: Amila
 * Model: UFood
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var Food = connection.define('food', {
    type: Sequelize.STRING,
    qty: Sequelize.STRING,
    price: Sequelize.DOUBLE,
    name: Sequelize.STRING,
    image: Sequelize.STRING
},{
    tableName: 'food',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Food;