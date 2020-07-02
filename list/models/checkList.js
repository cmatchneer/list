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
            onDelete: "cascade",
            foreignKey: {
                allowNull: false
            },
            hooks:true
        });
    }
    return CheckList
}