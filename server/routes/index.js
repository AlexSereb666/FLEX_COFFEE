const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const typeRouter = require('./typeRouter')
const viewRouter = require('./viewRouter')
const feedbackRouter = require('./feedbackRouter')
const basketRouter = require('./basketRouter')

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/type', typeRouter)
router.use('/view', viewRouter)
router.use('/feedback', feedbackRouter)
router.use('/basket', basketRouter)

module.exports = router
