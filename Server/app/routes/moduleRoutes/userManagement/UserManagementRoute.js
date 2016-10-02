/**
 * Created by User on 16/9/2016.
 * Developer: Kasun
 */
var express = require('express');
var router = express.Router();
var ControllerMap = require('../../../Controller/ControllerMap');

var UserRoleController = ControllerMap.UserRoleController;
var UserController = ControllerMap.UserController;
var StudentController = ControllerMap.StudentController;
var LecturerController = ControllerMap.LecturerController;
//var HodController = ControllerMap.HodController;

router.post('/add-new-user', function(req, res, next) {

    UserController.create(req.body, res);

    if (req.type == 'Student'){
        StudentController.create(req.body, res);
    }else if(req.type == 'Lecturer'){
        LecturerController.create(req.body, res);
    }else if(req.type == 'HOD'){
        //HodController.create(req.body, res);
    }

});

router.get('/get-all-users', function(req, res, next) {
    UserController.get(res);
});

module.exports = router;