/**
 * Created by amila on 10/2/16.
 */
var express = require('express');
var router = express.Router();
var ControllerMap = require('../../../Controller/ControllerMap');

var FoodController = ControllerMap.FoodController;

/*
 * food insert service
 */
router.post('/', function(req, res, next) {
    FoodController.create(req.body, res);
});

/*
 * food update service
 */
router.put('/:id', function(req, res, next) {
    FoodController.update(req.body, req.params.id, res);
});

/*
 * food delete service
 */
router.delete('/:id', function(req, res, next) {
    FoodController.delete(req.params.id, res);
});

/*
 * get all the food item service
 */
router.get('/', function(req, res, next) {
   FoodController.get(res);
});

/*
 * get food items by id
 */
router.get('/:id', function(req, res, next) {
    FoodController.getSeperately(req.params.id, res);
});

module.exports = router;