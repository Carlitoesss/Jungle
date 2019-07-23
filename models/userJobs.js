// creating our task model
// set it to export because our index.js file is expecting an 
// export of a model
module.exports = function(sequelize, DataTypes){
    var userJobs = sequelize.define("userJobs", {
        jobId: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        Done: {
            type: DataTypes.BOOLEAN, 
            allowNull: false
        },
        pending: {
            type: DataTypes.BOOLEAN, 
            allowNull: false
        }
    });

    return userJobs
}
