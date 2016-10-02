/**
 * Created by User on 9/18/2016.
 * Developer :- Kasun
 */
var Module = require('../../models/Models');
var User = Module.User;

function UserController() {
    
    /*
     * get all the user types without filtering
     * @params
     * res = response of middleware express
     */
    this.get = function(res) {
        User.findAll({
                            where: {
                                status: 1
                              }
            }).then(function(data) {
            res.send(data);
        });
    };

    /*
     *insert new user
     * @params
     * UserRoleInstance = Instance provided by the client
     * res = response of middleware express
     */
    this.create = function(UserInstance, res) {
        User.create( {
                userPassword: UserInstance.password,
                userUserName: UserInstance.user_name,
                userFullname: UserInstance.full_name,
                userEmail: UserInstance.email,
                status: 1
            }
        ).then(function(data) {
                res.send(data);
        });
    };

}

module.exports = new UserController();