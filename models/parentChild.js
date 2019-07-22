// creating our task model
// set it to export because our index.js file is expecting an 
// export of a model
module.exports = function(sequelize, DataTypes){
    var parentChild = sequelize.define("parentChild", {
        childId: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        parentId: {
            type: DataTypes.INTEGER, 
            allowNull: false
        }
    });

    return parentChild
}
