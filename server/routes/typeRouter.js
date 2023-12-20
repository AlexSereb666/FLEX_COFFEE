const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')

router.get('/', typeController.getAll)
router.post('/', typeController.create)
router.delete('/:id', typeController.kick)

module.exports = router
