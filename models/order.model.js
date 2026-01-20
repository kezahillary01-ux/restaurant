const Order = (sequelize, DataTypes) => {
    return sequelize.define("`order`", {
        id : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        custname: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            isEmail : true
        },
        foodname : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        extrafood : {
            type : DataTypes.STRING,
            allowNull : true,
        },
        countfood : {
            type : DataTypes.NUMERIC,
            allowNull : false,
        },
        location : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        message : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        delevered : {
            type : DataTypes.BOOLEAN,
            allowNull : true,
        }, 
    },
        {
            timestamps: true,
            createdAt: 'created',
            updatedAt : false
        }
    )
}

module.exports = Order