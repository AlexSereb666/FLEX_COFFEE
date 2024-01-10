const { Order } = require('../models/models');
const ApiError = require('../error/ApiError');

class orderController {
    // добавить продукт в корзину //
    async addToOrder(req, res, next) {
        try {
            const { userId, productId } = req.body;
            const currentDate = new Date();
            await Order.create({ date: currentDate, userId: userId, productId: productId });
            return res.json({ message: 'Продукт успешно добавлен в заказ' });
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }
}

module.exports = new orderController();
