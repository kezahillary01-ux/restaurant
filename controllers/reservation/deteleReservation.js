const sequelize = require('../../config/index').Reservation
const deleteReservationController = async (req, res) => {
	try {
		const reservation = await sequelize.findOne({
			where: {
				name: req.query.name
			}
		}).then(async (response) => {
			return response.toJSON()
		})
		if (reservation) {
			 await sequelize.destroy({
				where: {
					name : req.query.name
				}
			 })
			res.status(200).json({
				message : "Reservation deleted successfully !!!"
			})
			
		} else {
			res.status(400).json({
				message : "Unable to delete reservation cause this doen't exist !!!"
			})
		}
	} catch (error) {
		res.status(500).json({
			message : "error  intern server"
		})
	}
}
module.exports = deleteReservationController
