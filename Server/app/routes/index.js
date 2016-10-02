/*
 * handle the url for any get, put, post and delete request
 * developer : Amila
 */

 
var express = require('express');
var router = express.Router();

var UserManagementRoute = require('./moduleRoutes/userManagement/UserManagementRoute');

router.use('/user-management/', UserManagementRoute);

module.exports = router;
