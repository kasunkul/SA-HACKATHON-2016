/**
 * Created by User on 9/18/2016.
 * Develop: Kasun
 * Model: User
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var User = connection.define('User', {
    userPassword: Sequelize.STRING,
    userUserName: Sequelize.STRING,
    userFullname: Sequelize.STRING,
    userEmail: Sequelize.STRING,
    status: Sequelize.BOOLEAN
},{
    tableName: 'user',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = User;