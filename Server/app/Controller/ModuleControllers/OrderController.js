/**
 * Created by User on 9/18/2016.
 * Developer :- Kasun
 */
var Module = require('../../models/Models');
var Order = Module.Order;


OrderController = function() {

    this.get = function(res) {
        Order.findAll().then(function(data) {
            res.send(data);
        });
    };

    this.create = function(OrdertInstance, res) {
        Order.create(OrdertInstance).then(function(data) {
            res.send(data);
        });
    };

    this.update = function(OrdertInstance, res) {
        Order.update({
            orderPayment: OrdertInstance.orderPayment,
            orderCustomerName: OrdertInstance.orderCustomerName,
            oderStatus: OrdertInstance.OrdertInstance,
        }, {
            where: {
                id: OrdertInstance.id
            }
        }).then(function(data) {
            res.send(data);
        });
    };

    this.delete = function(StudentInstance, res) {
        Student.destroy({
            where: {
                id: OrdertInstance.id
            }
        }).then(function(err, data) {
            if (err) {
                res.send({
                    status: 400,
                    message: "Error goig on"
                });
            } else {
                res.send({
                    status: 200,
                    message: "successfully deleted"
                });
            }
        });
    };

    this.getOrder = function(OrderNo, res) {
        Student.find({
            where: {
                id: OrderNo
            }
        }).then(function(data) {
            res.send(data);
        });
    };
};

module.exports = new OrderController();
