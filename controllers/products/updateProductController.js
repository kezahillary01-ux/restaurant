const sequelize = require('../../config/index').Product

const updateProductController = async (req, res) => {
	try {
		const product = await sequelize.findOne({
			where: {
				id: req.query.id
			}
		}).then(async (response) => {
			return response.toJSON()
		})
		if (product) {
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
				message : "Product updated successfully !!!"
			})
			
		} else {
			res.status(400).json({
				message : "Unable to update product !!!"
			})
		}
	} catch (error) {
		res.status(500).json({
			message : "error  intern server" + error
		})
	}
}
module.exports = updateProductController