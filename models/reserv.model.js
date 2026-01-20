const Reservation = (sequelize, DataTypes) => {
    return sequelize.define('Reservation', {
        id : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customerName: {
            type: DataTypes.STRING,
            allowNull: true,
                
        },
        date : {
            type : DataTypes.DATE,
            allowNull : true,
        },
        time : {
            type : DataTypes.TIME,
            allowNull : true,
        },
        partySize : {
            type : DataTypes.NUMERIC,
            allowNull : true,
        },
        phoneNumber : {
            type : DataTypes.NUMERIC,
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

module.exports = Reservation;