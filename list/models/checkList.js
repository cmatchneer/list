module.exports = function(sequelize, DataTypes) {
    var CheckList = sequelize.define("CheckList", {
        task:{
            type:DataTypes.STRING,
            allowNull:false
        },
        done:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        },
        userId:{
            type:DataTypes.INTEGER,
            allowNull:false
        }

    })
    CheckList.associate = function(models) {
        CheckList.belongsTo(models.ListType, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return CheckList
}