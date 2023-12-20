const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')

router.get('/:id', productController.getOne)
router.get('/', productController.getAll)
router.post('/', productController.postProduct)
router.delete('/:id', productController.kick)

module.exports = router
