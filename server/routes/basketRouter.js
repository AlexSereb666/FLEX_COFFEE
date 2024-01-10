const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, basketController.addToBasket)
router.get('/:id', authMiddleware, basketController.getBasket)
router.delete('/:basketProductId', authMiddleware, basketController.removeFromBasket)

module.exports = router
