const sequelize = require('../../config/index').Order
const addOrderController = async (req, res) => {
	try {
		const order = await sequelize.create(req.body)
			.then(async (response) => {
			return response.toJSON()
			}).catch((err) => {
				res.status(404).json({
				message : err
			})
			})
		if (order) {
			res.status(200).json({
				data: order,
				message : "Order created successfully !!!"
			})
		}
	} catch (error) {
		res.status(500).json({
			message : "error  intern server"
		})
	}
}
module.exports = addOrderController