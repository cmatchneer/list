module.exports = function(sequelize, DataTypes) {
    var Games = sequelize.define("Games", {
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        type:{
            type:DataTypes.STRING,
            allowNull:false
        },
        owned:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

        userId:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    })
    Games.associate = function(models) {
        Games.belongsTo(models.ListType, {
            onDelete: "cascade",
            foreignKey: {
                allowNull: false
            },
            hooks:true
        });
    }
    return Games
}