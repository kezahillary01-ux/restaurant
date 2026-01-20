const sequelize = require('../../config/index').Order

const updateOrderController = async (req, res) => {
	try {
		const order = await sequelize.findOne({
			where: {
				id: req.query.id
			}
		}).then(async (response) => {
			return response.toJSON()
		})
		if (order) {
			await sequelize.update(
				 req.body
			 ,
				{
					where: {
					id : req.query.id
				}
				}
			 )
			res.status(200).json({
				message : "Order updated successfully !!!"
			})
			
		} else {
			res.status(400).json({
				message : "Unable to update order !!!"
			})
		}
	} catch (error) {
		res.status(500).json({
			message : "error  intern server" + error
		})
	}
}
module.exports = updateOrderController