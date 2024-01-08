import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductCard.css';
import StarImg from '../../assets/img/star.png'
import BtnCustom from '../../utils/button/btn-form/BtnForm'
import { fetchOneProduct } from '../../http/productAPI';

const ProductCard = () => {
    const [product, setProduct] = useState({info: []})
    const { id } = useParams()

    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    }, [])

    return (
        <div className="product-card">
            <div className="product-card__top">
                <div className="product-card__img-product">
                    <img className="product-card__img-product__img" src={process.env.REACT_APP_API_URL + product.img} alt="Нет изображения"/>
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
                {product.info.map((info, index) => 
                    <div className={`product-card__bottom__${index % 2 === 0 ? "one" : "two"}`}>
                        {info.title}: {info.description}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductCard;
