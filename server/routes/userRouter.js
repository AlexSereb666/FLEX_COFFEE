const Router = require('express')
const router = new Router()
const userController = require('../controllers/userControllers')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)
router.delete('/kick', userController.kick)

module.exports = router
