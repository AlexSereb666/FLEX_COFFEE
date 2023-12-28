const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, login, email, phone, role) => {
    return jwt.sign({
        id, login, email, phone, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class userController {
    // регистрация //
    async registration(req, res, next) {
        const {login, password, email, phone, role} = req.body
        if (!login || !email || !phone) {
            return next(ApiError.badRequest('Некорректные параметры ввода!:('))
            //return res.status(404).json({ message: 'Некорректные параметры ввода!:(' })
        }

        // проверка, есть ли такой пользователь в БД //
        let candidate = await User.findOne({where: {login}})
        if (candidate) {
            return next(ApiError.badRequest('Данный логин занят'))
            //return res.status(404).json({ message: 'Данный логин занят' })
        }
        candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Данный email занят'))
            //return res.status(404).json({ message: 'Данный email занят' })
        }
        candidate = await User.findOne({where: {phone}})
        if (candidate) {
            return next(ApiError.badRequest('Данный телефон занят'))
            //return res.status(404).json({ message: 'Данный телефон занят' })
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({login, password: hashPassword, email, phone, role})
        const backet = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.login, user.email, user.phone, user.role);
        return res.json({token})
    }

    // авторизация //
    async login(req, res, next) {
        const {login, password} = req.body
        const user = await User.findOne({where: {login}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
            //return res.status(500).json({ message: 'Пользователь не найден' })
        }
        const comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Неправильный пароль'))
            //return res.status(500).json({ message: 'Неправильный пароль' })
        }
        const token = generateJwt(user.id, user.login, user.email, user.phone, user.role);
        return res.json({token})
    }

    // проверка находится ли пользователь в системе //
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.login, req.user.email, req.user.phone, req.user.role)
        return res.json({token})
    }

    // удаление пользователя //
    async kick(req, res) {
        // тут будет много связей с пользователем //
        // стоит делать в последнею очередь, после реализации полной БД //
    }
}

module.exports = new userController()
