const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    phone: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

const Basket = sequelize.define('basket', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketProductr = sequelize.define('basket_product', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Product = sequelize.define('product', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type:DataTypes.STRING},
    price: {type:DataTypes.INTEGER},
    rating: {type:DataTypes.INTEGER},
    img: {type:DataTypes.STRING},
    count: {type:DataTypes.INTEGER},
})

const Product_info = sequelize.define('product_info', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type:DataTypes.STRING},
    description: {type:DataTypes.STRING},
})

const Product_type = sequelize.define('Product_type', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Product_view = sequelize.define('Product_view', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Rating = sequelize.define('rating', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type:DataTypes.INTEGER},
    description: {type:DataTypes.STRING},
})

// связи //
User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketProductr)
BasketProductr.belongsTo(Basket)

Product_type.hasMany(Product)
Product.belongsTo(Product_type)

Product_view.hasMany(Product)
Product.belongsTo(Product_view)

Product.hasMany(Rating)
Rating.belongsTo(Product)

Product.hasMany(BasketProductr)
BasketProductr.belongsTo(Product)

Product.hasMany(Product_info)
Product_info.belongsTo(Product)

module.exports = {
    User,
    Basket,
    BasketProductr,
    Product,
    Product_info,
    Product_type,
    Product_view,
    Rating,
}