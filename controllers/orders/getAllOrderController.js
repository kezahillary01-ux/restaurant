const sequelize = require('../../config/index').Order

const getAllOrderController = async (req,res) => {
	try {
		const order = await sequelize.findAll()
		if (order) {
			res.status(200).json({
				data: order,
				message : "All orders returned successfully"
			})
		} else {
            res.status(404).json({
				message : "There was any order yet !!!"
			}) 
        }
	} catch (error) {
		res.status(500).json({
			message : "error server intern" + error
		})
	}
}

module.exports= getAllOrderController
