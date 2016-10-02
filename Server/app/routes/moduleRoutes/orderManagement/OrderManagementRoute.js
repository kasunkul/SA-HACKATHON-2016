var express = require('express');
var router = express.Router();
var ControllerMap = require('../../Controller/ControllerMap');
var OrderController = ControllerMap.OrderController;


router.get('/', function(req, res, next) {
    OrderController.get(res);
});

router.post('/create', function(req, res, next) {
    console.log(req.body);
    OrderController.create(req.body, res);
});

router.put('/', function(req, res, next) {
    OrderController.update(req.body, res);
});

router.delete('/', function(req, res, next) {
    OrderController.delete(req.body, res);
});

router.get('/:id', function(req, res, next) {
    OrderController.getOrder(req.params.id, res);
});

module.exports = router;
