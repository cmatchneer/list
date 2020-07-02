module.exports = function(sequelize, DataTypes) {
    var ListType = sequelize.define("ListType", {
        category:{
            type:DataTypes.STRING,
            allowNull: false
        },
        listName:{
            type:DataTypes.STRING,
            allowNull: false
        }

    })
    ListType.associate = function(models) {
        ListType.belongsTo(models.User, {
            onDelete: "cascade",
            foreignKey: {
                allowNull: false
            },
            hooks:true
        });
        ListType.hasMany(models.ShoppingItem, {
            onDelete: "cascade"
        });
        ListType.hasMany(models.WishList, {
            onDelete: "cascade"
        });
        ListType.hasMany(models.Books, {
            onDelete: "cascade"
        });
        ListType.hasMany(models.Games, {
            onDelete: "cascade"
        });
        ListType.hasMany(models.Collectables, {
            onDelete: "cascade"
        });
        ListType.hasMany(models.CheckList, {
            onDelete: "cascade"
        });
    };
    return ListType

};
