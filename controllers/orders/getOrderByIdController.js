const sequelize = require('../../config/index').Order
const getOrderByIdController = async (req, res) => {
	try {
	const order = await sequelize.formation.findOne({
			where: {
				id: req.query.id
			}
		})
	console.log(order)
	if (order) {
		res.status(200).json({
			message: "Order gets by id successfully",
			data : order
		})
	} else {
		res.status(404).json({
			message : "Unable to find order !!!"
		})
	}
} catch (error) {
	res.status(500).json({
		message : "failur no data" + error + " " + "server error !!!"
	})
}
}
module.exports = getOrderByIdController