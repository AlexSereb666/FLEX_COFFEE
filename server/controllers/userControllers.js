const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

class userController {
    // регистрация //
    async registration(req, res) {
        const {login, password, email, phone, role} = req.body
        if (!login || !email || !phone) {
            return next(ApiError.badRequest('Некорректные параметры ввода!:('))
        }

        // проверка, есть ли такой пользователь в БД //
        let candidate = await User.findOne({where: {login}})
        if (candidate) {
            return next(ApiError.badRequest('Данный логин занят'))
        }
        candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Данный email занят'))
        }
        candidate = await User.findOne({where: {phone}})
        if (candidate) {
            return next(ApiError.badRequest('Данный телефон занят'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({login, password: hashPassword, email, phone, role})
        const backet = await Basket.create({userId: user.id})
        const token = jwt.sign({
            id: user.id, email: user.email, phone: user.phone, role: user.role}, 
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
        )
        return res.json({token})
    }

    // авторизация //
    async login(req, res) {

    }

    // проверка находится ли пользователь в системе //
    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }

    // удаление пользователя //
    async kick(req, res) {
        // тут будет много связей с пользователем //
        // стоит делать в последнею очередь, после реализации полной БД //
    }
}

module.exports = new userController()
