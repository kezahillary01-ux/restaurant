const sequelize = require('../../config/index').Reservation

const updateReservationController = async (req, res) => {
	try {
		const reservation = await sequelize.findOne({
			where: {
				id: req.query.id
			}
		}).then(async (response) => {
			return response.toJSON()
		})
		if (reservation) {
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
				message : "Reservation updated successfully !!!"
			})
			
		} else {
			res.status(400).json({
				message : "Unable to update reservation !!!"
			})
		}
	} catch (error) {
		res.status(500).json({
			message : "error  intern server" + error
		})
	}
}
module.exports = updateReservationController
