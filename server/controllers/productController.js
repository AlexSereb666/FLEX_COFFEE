const uuid = require('uuid')
const path = require('path')
const {Product, Product_info} = require('../models/models')
const ApiError = require('../error/ApiError')
const fs = require('fs').promises;

class productController {
    // получить один продукт //
    async getOne(req, res) {
        const {id} = req.params
        const product = await Product.findOne({
            where: {id},
            include: [{model: Product_info, as: 'info'}]
        })
        return res.json(product)
    }

    // получить все продукты //
    async getAll(req, res) {
        let {ProductViewId, ProductTypeId, limit, page} = req.query
        page = page || 1 // количество страниц
        limit = limit || 8 // количество продуктов на 1 странице
        let offset = page * limit - limit
        let products;
        if (!ProductViewId && !ProductTypeId) {
            products = await Product.findAndCountAll({limit, offset})
        } 
        else if (ProductViewId && !ProductTypeId) {
            products = await Product.findAndCountAll({where: {ProductViewId}, limit, offset})
        } 
        else if (!ProductViewId && ProductTypeId) {
            products = await Product.findAndCountAll({where: {ProductTypeId}, limit, offset})
        } 
        else if (ProductViewId && ProductTypeId) {
            products = await Product.findAndCountAll({where: {ProductTypeId, ProductViewId}, limit, offset})
        }
        return res.json(products)
    }

    // добавить продукт //
    async postProduct(req, res, next) {
        try {
            let {name, price, ProductViewId, ProductTypeId, count, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg" 
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const product = await Product.create({name, price, ProductViewId, ProductTypeId, count, img: fileName})

            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    Product_info.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    })
                });
            }
  
            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.messgae))
        }
    }

    // удалить продукт //
    async kick(req, res, next) {
        try {
            const {id} = req.params;
    
            // Проверяем, существует ли продукт с указанным ID //
            const product = await Product.findOne({ where: { id } });
            if (!product) {
                return next(ApiError.badRequest('Продукт не найден'));
            }
    
            // Удаляем информацию о продукте //
            await Product_info.destroy({ where: { productId: id } });
    
            // Удаляем сам продукт //
            await Product.destroy({ where: { id } });
    
            return res.json({ message: 'Продукт успешно удален' });
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }
}

module.exports = new productController()
