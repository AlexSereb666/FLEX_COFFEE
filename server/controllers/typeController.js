const {Product_type} = require('../models/models')
const ApiError = require('../error/ApiError')

class typeController {
    // создание типа продукта //
    async create(req, res) {
        const {name} = req.body
        const type = await Product_type.create({name})
        return res.json(type)
    }

    // получение всех типов продукта //
    async getAll(req, res) {
        const types = await Product_type.findAll()
        return res.json(types)
    }

    // удаление типа продукта //
    async kick(req, res, next) {
        const {id} = req.params
        try {
            // Проверяем, существует ли тип продукта с указанным ID //
            const type = await Product_type.findOne({ where: { id } });
            if (!type) {
                return res.status(404).json({ message: 'Тип продукта не найден' });
            }

            // Удаляем сам тип продукта //
            await Product_type.destroy({ where: { id } });

            return res.json({ message: 'Тип продукта успешно удален' });
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new typeController()
