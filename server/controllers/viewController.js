const {Product_view} = require('../models/models')

class viewController {
    // получить все виды продукты //
    async getAll(req, res) {
        const views = await Product_view.findAll()
        return res.json(views)
    }

    // добавить вид продукт //
    async add(req, res) {
        const {name} = req.body
        const view = await Product_view.create({name})
        return res.json(view)
    }

    // удалить вид продукт //
    async kick(req, res) {
        const {id} = req.params
        try {
            // Проверяем, существует ли тип продукта с указанным ID //
            const view = await Product_view.findOne({ where: { id } });
            if (!view) {
                return res.status(404).json({ message: 'Вид продукта не найден' });
            }

            // Удаляем сам вид продукта //
            await Product_view.destroy({ where: { id } });

            return res.json({ message: 'Вид продукта успешно удален' });
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }
}

module.exports = new viewController()
