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
            allowNull: false
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
            allowNull: false
        },
        role: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        dob: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.TEXT, 
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    });

    return Users
}
