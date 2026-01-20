const express = require('express');
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");
const http = require("http").createServer(app);
const cors = require("cors");
const sequelize = require('./config/index');
const authRoute = require('./routes/users');
const reservRouter = require('./routes/reservation');
const orderRouter = require('./routes/order');
const productRouter = require('./routes/product')
// const io = require("socket.io")(http)

// const corsOptions = {
// 	origin: "http://localhost:5000/"
// 		};
app.use (cors());

// parse requests of content-type - application/json

app.use (bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded

app.use (bodyParser.urlencoded({extended:true}));


const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

//Add this before the app.get() block
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    
    socket.on("New notification", (event) => {
        console.log(event);
        io.emit('something happend');
        socket.broadcast.emit('something happend');

    })
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
});

//simple route
app.get ("/", (req, res) => {
res.json({message: "Welcome to Server-Scott"});
});
app.use("/api/v1", authRoute);
app.use("/api/v1", reservRouter);
app.use("/api/v1", orderRouter);
app.use("/api/v1", productRouter);
app.use("/Images", express.static("./Images"))

sequelize.initDb();

// set port, listen for requests
const PORT = process.env.PORT || 5000;
http.listen(PORT, () => {
    console.log (`Server : Server-Scott is listening on port ${PORT}`);
    // io.on("connection", (socket) => {
    //     console.log("User " + socket.id);

    //     socket.on("New notification", function (message) {
    //         socket.broadcast.emit("Notification", message);
    //     });
    // });

});

