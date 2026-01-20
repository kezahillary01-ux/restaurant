const {Sequelize, DataTypes} = require('sequelize');
const userModel = require('../models/user.model');
const orderModel = require('../models/order.model');
const reserModel = require('../models/reserv.model');
const productModel = require('../models/product.model');



const sequelize = new Sequelize(
    'elmomento',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        dialectOption: {
            timezone: 'Etc/GMT+2'
        },
        logging: false
    }
)

const User = userModel(sequelize, DataTypes)
const Order = orderModel(sequelize, DataTypes)
const Reservation = reserModel(sequelize, DataTypes)
const Product = productModel(sequelize, DataTypes)
const initDb = ()=>{
    return sequelize.sync({force: true}).then(()=>{
            User.create({
                id: 1,
				username: 'elmomento',
				email : "elmomento@gmail.com",
                password: 'hash'
            })

            Order.create({
                id: 1,
                image : 'image.png',
                custname: "elmomento",
                email : "elmomento@gmail.com",
                foodname : "sandwich",
                extrafood : "juice orange",
                countfood : 12,
                location : "elmomento gisenyi",
                message : "elmomento messahe",
                delivered : false
            })
            Reservation.create({
                id : 1,
                customerName : "elmomento",
                date : '1/1/2022',
                time : '12:00',
                partySize : 2,
                phoneNumber : '123',
            })  
            Product.create({
                id : 1,
                title : 'Elmomento',
                price : 500,
                devise : 'RW',
                description : 'Elmomento menu item',
                published : false,
            })    
        console.log(`Database synch successfully`);
    }).catch(err => {
        console.log(err);
    })
}

module.exports = { initDb, User, Order, Reservation, Product};