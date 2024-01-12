const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, orderController.addToOrder)
router.get('/', authMiddleware, orderController.getAllOrders)
router.put('/:id', authMiddleware, orderController.updateOrderStatus)

module.exports = router
