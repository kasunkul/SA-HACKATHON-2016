/**
 * Created by amila on 10/2/16.
 */
var Module = require('../../models/Models');
var Food = Module.Food;

function FoodController() {
    /*
     * get all the food items
     */
    this.get = function(res) {
        Food.findAll().then(function(data) {
            res.send(data);
        });
    };

    /*
     * update food items
     */
    this.update = function(foodInstance, foodId, res) {
        Food.Find({
            where: {
                id: foodInstance.id
            }
        }).then(function(data) {
            if (data) {
                data.update({
                    qty: foodInstance.qty,
                    price: foodInstance.price,
                    type: foodInstance.type,
                    name: foodInstance.name
                }).then(function(result) {
                    res.send(result);
                });
            }
        });
    }

    /*
     * insert food items
     */
    this.create = function(foodInstance, res) {
        Food.create(foodInstance).then(function(data) {
            res.send(data);
        });
    }

    /*
     * delete food item
     */
    this.delete = function(foodId, res) {
        Food.find({
            where: {
                id: foodId
            }
        }).then(function(foodInstance) {
            foodInstance.destroy();
        }).then(function(result) {
            res.send(result);
        });
    }

    /*
     * get food item individually
     */
    this.getSeperately = function(foodId, res) {
        Food.find({
            where: {
                id: foodId
            }
        }).then(function(data) {
            res.send(data);
        });
    }
}

module.exports = new FoodController();
