module.exports = function(sequelize, DataTypes) {
    var ShoppingItem = sequelize.define("ShoppingItem", {
        itemName:{
            type:DataTypes.STRING,
            allowNull: false
        },
        category:{
            type:DataTypes.STRING,
            allowNull: false
        },
        amount:{
            type: DataTypes.INTEGER,
            defaultValue:1,
            allowedNull:false
        },
        purchased:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        userId:{
            type:DataTypes.INTEGER,
            allowNull:false
        }

    });
    ShoppingItem.associate = function(models) {
        ShoppingItem.belongsTo(models.ListType, {
            foreignKey: {
                allowNull: false
            }
        });


    }
    return ShoppingItem
}