const sequelize = require('../../config/index').Reservation

const getAllReservationController = async (req,res) => {
	try {
		const reservation = await sequelize.findAll()
		if (reservation) {
			res.status(200).json({
				data: reservation,
				message : "All reservations returned successfully"
			})
		} else {
            res.status(404).json({
				message : "There was any reservation yet !!!"
			}) 
        }
	} catch (error) {
		res.status(500).json({
			message : "error server intern" + error
		})
	}
}

module.exports= getAllReservationController
