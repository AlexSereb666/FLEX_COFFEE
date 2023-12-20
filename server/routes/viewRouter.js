const Router = require('express')
const router = new Router()
const viewController = require('../controllers/viewController')

router.get('/', viewController.getAll)
router.post('/', viewController.add)
router.delete('/:id', viewController.kick)

module.exports = router
