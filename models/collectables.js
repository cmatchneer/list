module.exports = function(sequelize, DataTypes) {
    var Collectables = sequelize.define("Collectables", {
        itemName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        itemType:{
            type:DataTypes.STRING,
            allowNull:false
        },
        limitedEdition:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        userId:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    })
    Collectables.associate = function(models) {
        Collectables.belongsTo(models.ListType, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Collectables
}