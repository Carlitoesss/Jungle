// creating our task model
// set it to export because our index.js file is expecting an 
// export of a model
const bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes){
    var Users = sequelize.define("Users", {
        address: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING, 
        },
        name: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        email: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        license: {
            type: DataTypes.STRING, 
        },
        role: {
            type: DataTypes.STRING, 
        },
        dob: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.TEXT, 
        },
        avatar: {
            type: DataTypes.STRING, 
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    // create custom method for our user model.
    // this will handle if an unhashed password the user is providing
    // is equal to the hash password in out database
    Users.prototype.validPassword = function(password){
        return bcrypt.compareSync(password, this.password)
    }

    // Hooks are various methods that run during our model lifecycle
    // in this case, before a user is created, we will automatically
    // encrypt password coming in.
    Users.addHook('beforeCreate', function(user){
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    });
    return Users
}
