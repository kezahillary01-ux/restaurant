
const user = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        id : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true,
            
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            isEmail : true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
      
    },
        {
            timestamps: true,
            createdAt: 'created',
            updatedAt : false
        }
    )
};

module.exports = user