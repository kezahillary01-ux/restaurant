const sequelize = require('../../config/index').Reservation
const addReservationController = async (req, res) => {
	try {
		const reservation = await sequelize.create(req.body)
			.then(async (response) => {
			return response.toJSON()
			}).catch((err) => {
				res.status(404).json({
				message : err
			})
			})
		if (reservation) {
			res.status(200).json({
				data: reservation,
				message : "Reservation created successfully !!!"
			})
		}
	} catch (error) {
		res.status(500).json({
			message : "error  intern server"
		})
	}
}
module.exports = addReservationController
