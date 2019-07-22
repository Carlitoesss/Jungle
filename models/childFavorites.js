// creating our task model
// set it to export because our index.js file is expecting an 
// export of a model
module.exports = function(sequelize, DataTypes){
    var childFavorites = sequelize.define("childFavorites", {
        jobId: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        childId: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        approval: {
            type: DataTypes.BOOLEAN, 
            allowNull: false
        }
    });

    return childFavorites
}
