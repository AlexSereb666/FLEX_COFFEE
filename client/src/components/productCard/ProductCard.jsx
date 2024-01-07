import React from 'react';
import './ProductCard.css';
import StarImg from '../../assets/img/star.png'
import BtnCustom from '../../utils/button/btn-form/BtnForm'

const ProductCard = () => {
    const product = {id: 1, name: 'Капучино', price: 100, rating: 5, img: 'https://klike.net/uploads/posts/2023-03/1678856583_3-22.jpg', count: 10}
    const description = [
        {id: 1, title: 'Объем', description: '200мл'},
        {id: 2, title: 'Добавки', description: 'Сливочный соус'},
        {id: 3, title: 'Сахар', description: 'два кубика'},
        {id: 4, title: 'Молоко', description: '50мл'},
    ]
    return (
        <div className="product-card">
            <div className="product-card__top">
                <div className="product-card__img-product">
                    <img className="product-card__img-product__img" src={product.img} alt="Нет изображения"/>
                </div>
                <div className="product-card__rating">
                    <div className="product-card__rating__name">
                        {product.name}
                    </div>
                    <img className="product-card__rating__img" src={StarImg} alt="Нет изображения"/>
                    <span className="product-card__rating__num">
                        {product.rating}
                    </span>
                </div>
                <div className="product-card__buy">
                    <div className="product-card__buy__price">
                        {product.price}₽
                    </div>
                    <BtnCustom
                        text="Добавить в корзину"
                    />
                </div>
            </div>
            <div className="product-card__bottom">
                <h3>Описание</h3>
                {description.map((info, index) => 
                    <div className={`product-card__bottom__${index % 2 === 0 ? "one" : "two"}`}>
                        {info.title}: {info.description}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductCard;
