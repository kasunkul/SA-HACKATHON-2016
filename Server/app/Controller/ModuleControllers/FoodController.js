/**
 * Created by amila on 10/2/16.
 * By Amila
 */
var Module = require('../../models/Models');
var fs = require('fs');
var Food = Module.Food;

function FoodController() {
    /*
    * get all the food items
     */
    this.get = function(res) {
        Food.findAll().then(function(data) {
            res.send(data);
        });
    }

    /*
     * update food items
     */
    this.update = function(foodInstance, res) {
        Food.find({
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
        })
    }

    /*
     * insert food items
     */
    this.create = function(foodInstance, res) {
        //if the image excist
        if(foodInstance.image) {
            var path = this.imageUploader(foodInstance);
            foodInstance.image = path.path;
        }
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

    /*
     * image uploader
     */
    this.imageUploader = function(req) {
        var base64Data = req.body.image.replace(/^data:image\/png;base64,/, "");
        fs.writeFile("../../images/"+req.body.name+".png", base64Data, 'base64', function(err,data) {
            if(err) {
                return null;
            } else {
                return data;
            }
        });
    }
}

module.exports = new FoodController();