import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './CoffeeHouseCard.css';
import addressImg from '../../../assets/img/address-icon.png';
import cosmos from '../../../assets/img/cosmo.jpg';
import Slider from './slider/Slider';

function CoffeeHouseCard() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);


    let { id } = useParams();

    const handleImageClick = (image, index) => {
        setSelectedImageIndex(index);
        setSelectedImage(image);
    };
      

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const handleRemainingClick = () => {
        if (remainingImages > 0) {
            handleImageClick(selectedCoffeeHouse.gallery[maxVisibleImages].name);
        }
    };

    let coffeeHouses = [{
        id         : 1,
        name       : 'Coffee House 1',
        phone      : '+7 (951) 764-90-78\n+7 (951) 764-90-78',
        address    : 'Ул. Костюкова дом 1',
        score      : 10,
        orders     : 0,
        coordinates: [50.582209, 36.596233],
        schedule   : 'Пн-Пт: 08:00 - 23:00\nСб-Вс: 10:00 - 24:00',
        description: 'Уютная уголочная кофейня, где аромат свежесваренного кофе сливается с обаянием приглушенного освещения. Погрузитесь в атмосферу непринужденных бесед и вдохновляющих моментов, наслаждаясь каждой глоткой внимательно приготовленного напитка.',
        gallery    : [
            {name: cosmos}, 
            {name: cosmos}, 
            {name: cosmos}, 
            {name: cosmos}, 
            {name: cosmos}, 
            {name: cosmos}] // заменить на id
    },
    {
        id         : 2,
        name       : 'Coffee House 2',
        phone      : '+7 (951) 764-90-78\n+7 (951) 764-90-78',
        address    : 'Ул. Костюкова дом 2',
        score      : 10,
        orders     : 0,
        coordinates: [50.645189, 36.570570],
        schedule   : 'Пн-Пт: 08:00 - 23:00\nСб-Вс: 10:00 - 24:00',
        description: 'Уютная кофейня с атмосферой теплой дружелюбности, где аромат свежесваренного кофе сливается с уникальным дизайном интерьера. Предлагаем широкий выбор кофейных напитков, от классических эспрессо до авторских латте и чая ручной заварки. Идеальное место для встреч с друзьями, работы вдохновения и наслаждения вкусом.',
        gallery    : [
            {name: cosmos}, 
            {name: cosmos}, 
            {name: cosmos}, 
            {name: cosmos}, 
            {name: cosmos}, 
            {name: cosmos}] // заменить на id
    },
    {
        id         : 3,
        name       : 'Coffee House 3',
        phone      : '+7 (951) 764-90-78\n+7 (951) 764-90-78',
        address    : 'Ул. Костюкова дом 3',
        score      : 10,
        orders     : 0,
        coordinates: [50.594120, 36.598143],
        schedule   : 'Пн-Пт: 08:00 - 23:00\nСб-Вс: 10:00 - 24:00',
        description: 'Изысканные зерна со всего мира раскрывают свой богатый вкус в нашей кофейне. Погрузитесь в атмосферу тепла и радушия, наслаждаясь ручным приготовлением каждой чашки. От стандартных эспрессо до креативных напитков - у нас кофе становится искусством.',
        gallery    : [
            {name: cosmos}, 
            {name: cosmos}, 
            {name: cosmos}, 
            {name: cosmos}, 
            {name: cosmos}, 
            {name: cosmos}] // заменить на id
    },
    {
        id         : 4,
        name       : 'Coffee House 4',
        phone      : '+7 (951) 764-90-78\n+7 (951) 764-90-78',
        address    : 'Ул. Костюкова дом 4',
        score      : 10,
        orders     : 0,
        coordinates: [50.595425, 36.571262],
        schedule   : 'Пн-Пт: 08:00 - 23:00\nСб-Вс: 10:00 - 24:00',
        description: 'Воплощение страсти к кофе и искусству в каждой чашке. Наша кофейня - это оазис ароматов, где каждый глоток погружает в мир новых вкусовых открытий. От эспрессо, заряжающего энергией, до латте с нежными нотками - мы создаём настроение для вашего идеального дня.',
        gallery    : [
            {name: cosmos}, 
            {name: cosmos}, 
            {name: cosmos}, 
            {name: cosmos}, 
            {name: cosmos}, 
            {name: cosmos}] // заменить на id
    }]

    const selectedCoffeeHouse = coffeeHouses.find(coffeeHouse => coffeeHouse.id === parseInt(id));

    const mapData = {
        center: selectedCoffeeHouse.coordinates,
        zoom: 14,
    };

    const maxVisibleImages = 5;
    const remainingImages = Math.max(selectedCoffeeHouse.gallery.length - maxVisibleImages, 0);
    const visibleImages = selectedCoffeeHouse.gallery.slice(0, maxVisibleImages);

    return (
        <div className="coffee-house-card">
            <div className="coffee-house-card__content">
                <div className="coffee-house-card__left">
                    <h1 className='coffee-house-card__left__title'>{selectedCoffeeHouse.name}</h1>
                    <div className='coffee-house-card__left__address'>(<img src={addressImg} alt='error'/> {selectedCoffeeHouse.address})</div>
                    <div className='coffee-house-card__left__description'>
                        {selectedCoffeeHouse.description}
                    </div>
                    <div className='coffee-house-card__left__buttons'>
                        <button className="coffee-card-button" onClick={() => {console.log('Меню')}}>
                            Меню кофейни
                        </button>
                        <button className="coffee-card-button" onClick={() => {console.log('Отзывы')}}>
                            Отзывы кофейни
                        </button>
                    </div>
                    <div className='coffee-house-card__left__gallery'>
                        {visibleImages.map((image, index) => (
                        <img
                            key={index}
                            src={image.name}
                            alt='error'
                            className="coffee-house-card__left__gallery__image"
                            onClick={() => handleImageClick(image.name, index)}
                        />
                        ))}
                        {remainingImages > 0 && (
                        <div className="coffee-house-card__left__gallery__remaining" onClick={handleRemainingClick}>
                            +{remainingImages}
                        </div>
                        )}
                    </div>
                    {selectedImage && (
                        <Slider
                            images={selectedCoffeeHouse.gallery.map((item) => item.name)}
                            onClose={handleCloseModal}
                            initialIndex={selectedImageIndex}
                        />
                    )}
                </div>
                <div className="coffee-house-card__right">
                    <div className="coffee-house-card__right__map-container">
                        <YMaps>
                            <Map defaultState={mapData} width='100%' height='100%'>
                                <Placemark geometry={selectedCoffeeHouse.coordinates} />
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </div>
            <div className='coffee-house-card__bottom'>
                <div className='coffee-house-card__bottom__info'>
                    <div className='coffee-house-card__bottom__info__orders'>
                        <h3>Кол-во заказов:</h3>
                        <div className='coffee-house-card__bottom__info__orders__desc'>
                            {selectedCoffeeHouse.orders}
                        </div>
                    </div>
                    <div className='coffee-house-card__bottom__info__score'>
                        <h3>Средняя оценка:</h3>
                        <div className='coffee-house-card__bottom__info__score__desc'>
                            {selectedCoffeeHouse.orders} / 10
                        </div>
                    </div>
                    <div className='coffee-house-card__bottom__info__phone'>
                        <h3>Контактные телефоны:</h3>
                        <div className='coffee-house-card__bottom__info__phone__desc'>
                            {selectedCoffeeHouse.phone.split('\n').map((item, index) => (
                                <React.Fragment key={index}>
                                    {item}
                                    <br />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <div className='coffee-house-card__bottom__info__schedule'>
                        <h3>График работы:</h3>
                        <div className='coffee-house-card__bottom__info__schedule__desc'>
                            {selectedCoffeeHouse.schedule.split('\n').map((item, index) => (
                                <React.Fragment key={index}>
                                    {item}
                                    <br />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoffeeHouseCard;
