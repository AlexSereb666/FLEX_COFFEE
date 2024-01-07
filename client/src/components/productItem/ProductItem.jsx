import React from 'react';
import './ProductItem.css';
import imgStar from '../../assets/img/star.png'
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../utils/consts';

const ProductItem = ({product}) => {
    const navigate = useNavigate()
    return (
        <div className="product-item">
            <div className="product-item__wrapper" onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>
                <img className="product-item__img" src={product.img} alt="error"/>
                <div className="product-item__info">
                    <div className="product-item__name">
                        {product.name}
                    </div>
                    <div className="product-item__price-and-rating">
                        <span className="product-item__price-and-rating__price">
                            {product.price}₽
                        </span>
                        <span className="product-item__price-and-rating__rating">
                            {product.rating}
                            <img className="product-item__price-and-rating__rating__star" src={imgStar} alt="error"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
