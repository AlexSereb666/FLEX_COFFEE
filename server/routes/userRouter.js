const Router = require('express')
const router = new Router()
const userController = require('../controllers/userControllers')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.delete('/kick', userController.kick)
router.post('/change-password', userController.changePassword);
router.post('/change-profile', userController.changeProfile);

module.exports = router
