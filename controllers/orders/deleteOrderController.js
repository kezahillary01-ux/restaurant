const sequelize = require('../../config/index').Order
const deleteOrderController = async (req, res) => {
	try {
		const order = await sequelize.findOne({
			where: {
				name: req.query.name
			}
		}).then(async (response) => {
			return response.toJSON()
		})
		if (order) {
			 await sequelize.destroy({
				where: {
					name : req.query.name
				}
			 })
			res.status(200).json({
				message : "Order deleted successfully !!!"
			})
			
		} else {
			res.status(400).json({
				message : "Unable to delete order cause this doen't exist !!!"
			})
		}
	} catch (error) {
		res.status(500).json({
			message : "error  intern server"
		})
	}
}
module.exports = deleteOrderController