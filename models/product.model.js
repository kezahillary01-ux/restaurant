const Product = (sequelize, DataTypes) => {
    return sequelize.define("product", {
        id : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },

        price : {
            type : DataTypes.NUMERIC,
            allowNull : false,
        },
        devise : {
            type : DataTypes.STRING,
            allowNull : true,
        },
        description : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        published : {
            type : DataTypes.BOOLEAN,
            allowNull : true,
        },
        image : {
            type : DataTypes.STRING,
            allowNull : true,
        }
    },
        {
            timestamps: true,
            createdAt: 'created',
            updatedAt : false
        }
    )
}

module.exports = Product