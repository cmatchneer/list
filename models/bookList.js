module.exports = function(sequelize, DataTypes) {
    var Books = sequelize.define("Books", {
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        author:{
            type:DataTypes.STRING,
            allowNull:false
        },
        genre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        finished:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        userId:{
            type:DataTypes.INTEGER,
            allowNull:false
        }

    })
    Books.associate = function(models) {
        Books.belongsTo(models.ListType, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Books
}