const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sequelize = require('../../config/index').User;
const JWT_LOGIN_TOKEN = 'USER_EL_MOMENTO_RANDOM_TOKEN_SECRET';

const login = (req, res) => {
    sequelize.findOne({ where : { email : req.body.email }})
        .then(user => {
            if(!user){
                return res.status(404).json({ message: 'The user doen\'t exist !'});
            }
            bcrypt.compare(req.body.password, user.password)
                  .then(valid => {
                    if(!valid){
                        return res.status(401).json({ message: 'Username or password incorrect' });
                    }
                    res.status(200).json({
                        id : user.id,
                        username : user.username,
                        email : user.email,
                        token : jwt.sign(
                            {userId : user._id},
                            JWT_LOGIN_TOKEN,
                            { expiresIn: '24h' }
                        )
                    })
                  })
                  .catch(err => {
                    res.status(500).json({ err, message: "Connection error !" })
                  })
            })
    .catch(err => {
        res.status(500).json({ "error" : err, message : "Server error !" })
    });
    
}

module.exports = login;