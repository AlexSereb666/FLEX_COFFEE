const { Order } = require('../models/models');
const ApiError = require('../error/ApiError');

class orderController {
    // добавить продукт в корзину //
    async addToOrder(req, res, next) {
        try {
            const { userId, productId, status } = req.body;
            const currentDate = new Date();
            await Order.create({ date: currentDate, userId: userId, productId: productId, status: status });
            return res.json({ message: 'Продукт успешно добавлен в заказ' });
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    // изменить статус заказа по его ID //
    async updateOrderStatus(req, res, next) {
        try {
            const { id } = req.params;
            const { status } = req.body;

            const order = await Order.findByPk(id);
            if (!order) {
                return next(ApiError.notFound('Заказ не найден'));
            }

            order.status = status;
            await order.save();

            return res.json({ message: 'Статус заказа успешно обновлен' });
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    // получить все заказы //
    async getAllOrders(req, res, next) {
        try {
            const orders = await Order.findAll();
            return res.json(orders);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }
}

module.exports = new orderController();
