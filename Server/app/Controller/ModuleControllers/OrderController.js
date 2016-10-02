/**
 * Created by pasindu on 10/2/16.
 */
var Module = require('../../models/Models');
var Order = Module.Order;

function OrderController() {
    /*
     * get all order
     */
    this.get = function(res) {
        Order.findAll().then(function(data) {
            res.send(data);
        });
    };

    /*
     * update order
     */
    this.update = function(OrdertInstance, res) {
        Order.Find({
            where: {
                id: OrdertInstance.id
            }
        }).then(function(data) {
            if (data) {
                data.update({
                    orderPayment: OrdertInstance.orderPayment,
                    orderCustomerName: OrdertInstance.orderCustomerName,
                    oderStatus: OrdertInstance.oderStatus
                }).then(function(result) {
                    res.send(result);
                });
            }
        });
    };

    /*
     * insert order
     */
    this.create = function(OrdertInstance, res) {
        Order.create(OrdertInstance).then(function(data) {
            res.send(data);
        });
    };

    /*
     * delete order
     */
    this.delete = function(orderId, res) {
        Order.find({
            where: {
                id: orderId
            }
        }).then(function(OrdertInstance) {
            OrdertInstance.destroy();
        }).then(function(result) {
            res.send(result);
        });
    };

    /*
     * get food order
     */
    this.getSeperately = function(orderId, res) {
        Order.findAll({
            where: {
                id: orderId
            }
        }).then(function(data) {
            res.send(data);
        });
    };
}

module.exports = new OrderController();
