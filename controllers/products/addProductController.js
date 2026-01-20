const sequelize = require('../../config/index').Product
const { file } = require('googleapis/build/src/apis/file')
const multer = require('multer')
const path = require('path')


// Upload images

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, '/Images')
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage : storage,
    limits : { fileSize : '10000000'},
    fileFilter : (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        } else {
            cb('Give a proper filetype formate to upload !!!!')
        }
    }

}).single('image')



const addProduct = async (req, res) => {
    let info = {
        title : req.body.title,
        price : req.body.price,
        devise : req.body.devise,
        description : req.body.description,
        published : req.body.published ? req.body.published : false,
        image : req.file.path
    }

    try {
        const product = await sequelize.create(info)
                .then(async (response) => {
                    return response.toJSON()
                    }).catch((err) => {
                        res.status(404).json({
                        message : err
                    })
                    })
        if(product){
        res.status(200).json({
        data: product,
        message : "Product created successfully !!!"
        })
        }
        
    } catch (error) {
        res.status(500).json({
			message : "error  intern server"
		})
    }
}

module.exports = {addProduct , upload}