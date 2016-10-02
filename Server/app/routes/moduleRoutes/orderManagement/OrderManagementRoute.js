/**
 * Created by pasindu on 10/2/16.
 */
var express = require('express');
var router = express.Router();
var ControllerMap = require('../../../Controller/ControllerMap');

var OrderController = ControllerMap.OrderController;

/*
 * order insert service
 */
router.post('/', function(req, res, next) {
    OrderController.create(req.body, res);
});

/*
 * order update service
 */
router.put('/', function(req, res, next) {
    OrderController.update(req.body, req.query.id, res);
});

/*
 * order delete service
 */
router.delete('/:id', function(req, res, next) {
    OrderController.delete(req.params.id, res);
});

/*
 * get all the order service
 */
router.get('/', function(req, res, next) {
    OrderController.get(res);
});

/*
 * get order items by id
 */
router.get('/:id', function(req, res, next) {
    OrderController.getSeperately(req.params.id, res);
});

module.exports = router;
