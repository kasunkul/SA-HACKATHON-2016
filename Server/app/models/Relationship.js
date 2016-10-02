/**
 * Created by Kausn on 9/7/2016.
 * create relationship in between each models.
 */
var Models = require('./Models');
var connection = require('./Connection');
var Relationship = function() {

    /**added by Kasun*/

    //Models.UserRole.hasMany(Models.User)
    //Models.User.belongsTo(Models.UserRole)
    //Models.Department.belongsToMany(Models.Faculty,{through: 'DepartmentFaculty'})
    //Models.Faculty.belongsToMany(Models.Department,{through: 'DepartmentFaculty'})


    connection
        .sync()
        .then(function(err) {
            console.log("Database created");
        }, function (err) {
            console.log('An error occurred while creating the table:', err);
        });
}

module.exports = new Relationship();