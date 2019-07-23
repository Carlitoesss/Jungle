module.exports = function(sequelize, DataTypes){
    var Comment = sequelize.define("Comment", {
        userID: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        jobID: {
            type: DataTypes.INTEGER, 
            allowNull: false
        }
    });

    return Comment
}
