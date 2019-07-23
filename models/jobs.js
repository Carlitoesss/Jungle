// creating our task model
// set it to export because our index.js file is expecting an 
// export of a model
module.exports = function(sequelize, DataTypes){
    var Jobs = sequelize.define("Jobs", {
        category: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        pay: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        address: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        length: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        title: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT, 
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
        },
        avatar: {
            type: DataTypes.STRING, 
        }
    });

    return Jobs
}
