// creating our task model
// set it to export because our index.js file is expecting an 
// export of a model
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

    return Users
}
