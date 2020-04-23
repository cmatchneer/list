module.exports = function(sequelize, DataTypes) {
    var WishList = sequelize.define("WishList", {
        itemName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        category:{
            type:DataTypes.STRING,
            allowNull: false
        },
        itemType:{
            type:DataTypes.STRING,
            allowNull:false
        },
        purchased:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        userId:{
            type:DataTypes.INTEGER,
            allowNull:false
        }

    })
    WishList.associate = function(models) {
        WishList.belongsTo(models.ListType, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return WishList
}