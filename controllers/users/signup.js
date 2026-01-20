//const sequelize = require('../../config');
const sequelize = require('../../config/index').User
const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')

const signup = async (req, res) => {
	let userAUth,hash,token
	try {
		const { username, email, password } = await req.body
		const userExist = await sequelize.findOne({
			where: { email: email }
		})
		if (userExist) {
			res.status(404).json({
				message : "User already exists ! Try again later"
			})
		} else {
			if (username && email && password) {
				if (password) {
					hash = await bcrypt.hash(password, 10)
						
				}
					
				userAUth= await sequelize.create({
					username,
					email,
					password : hash
				})
				.then(async (response) => {
						return  await response.toJSON()
				})
				.catch(async (error) => {
					res.status(404).json({
						message: "Ressaurces non found !" + error
					})
				})
					
				if (userAUth) {
					token = jsonwebtoken.sign({ username, email }, 
					"USER_EL_MOMENTO_RANDOM_TOKEN_SECRET_SIGNUP", 
					{ expiresIn: "30d" })
				}
				if (token) {
					res.status(200).json({
						data: {
							username,
							email,
							token
						}
					})
				}
			
			}
		}	
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message : "Server error  " + error
		})
	}
}

module.exports = signup