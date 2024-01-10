import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductCard.css';
import StarImg from '../../assets/img/star.png'
import BtnCustom from '../../utils/button/btn-form/BtnForm'
import { fetchOneProduct } from '../../http/productAPI';
import { Context } from '../../index'
import { getBasket, addToBasket } from '../../http/basketAPI'
import MessageBox from '../messageBox/MessageBox';
import { jwtDecode } from 'jwt-decode'
import { LOGIN_ROUTE } from '../../utils/consts';

const ProductCard = () => {
    const [product, setProduct] = useState({info: []})
    const { id } = useParams()
    const navigate = useNavigate()

    //const { basket } = useContext(Context)
    const { user } = useContext(Context)

    const [showModalMessageBox, setShowModalMessageBox] = useState(false);
    const [messageBoxMessage, setMessageBoxMessage] = useState("");

    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    }, [])

    const addProductToBasket = () => {
        if (!user.isAuth) {
            navigate(LOGIN_ROUTE)
            return
        }

        const userToken = jwtDecode(localStorage.getItem('token'))
        addToBasket(userToken.id, id).then(data => {
            setMessageBoxMessage("Продукт успешно добавлен в корзину")
            handleOpeneModalMessageBox()
        })
        //getBasket(user.id).then(data => basket.setBasket(data.basket_products))
    }

    const handleOpeneModalMessageBox = () => {
        setShowModalMessageBox(true);
    }

    const handleCloseModalMessageBox = () => {
        setShowModalMessageBox(false);
    }

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
                        onClick={addProductToBasket}
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
            {showModalMessageBox && (
                <MessageBox
                    onClose={handleCloseModalMessageBox} 
                    message={messageBoxMessage}
                />
            )}
        </div>
    );
}

export default ProductCard;
