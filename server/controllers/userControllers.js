const ApiError = require('../error/ApiError')

class userController {
    // регистрация //
    async registration(req, res) {

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
