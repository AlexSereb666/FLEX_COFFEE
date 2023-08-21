import React from 'react';
import { useParams } from 'react-router-dom';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './CoffeeHouseCard.css';

function CoffeeHouseCard() {
    let { id } = useParams();

    let coffeeHouses = [{
        id         : 1,
        name       : 'Coffee House 1',
        phone      : '',
        address    : '',
        score      : 10,
        orders     : 0,
        coordinates: [55.75, 37.57],
        schedule   : '',
        description: '',
        gallery    : []
    },
    {
        id         : 2,
        name       : 'Coffee House 2',
        phone      : '',
        address    : '',
        score      : 10,
        orders     : 0,
        coordinates: [55.75, 37.57],
        schedule   : '',
        description: '',
        gallery    : []
    },
    {
        id         : 3,
        name       : 'Coffee House 3',
        phone      : '',
        address    : '',
        score      : 10,
        orders     : 0,
        coordinates: [55.75, 37.57],
        schedule   : '',
        description: '',
        gallery    : []
    },
    {
        id         : 4,
        name       : 'Coffee House 4',
        phone      : '',
        address    : '',
        score      : 10,
        orders     : 0,
        coordinates: [55.75, 37.57],
        schedule   : '',
        description: '',
        gallery    : []
    }]

    const mapData = {
        center: [55.75, 37.57],
        zoom: 10,
    };

    const placemarkGeometry = [55.75, 37.57];

    const selectedCoffeeHouse = coffeeHouses.find(coffeeHouse => coffeeHouse.id === parseInt(id));

    return (
        <div className="coffee-house-card">
            <div className="coffee-house-card__left">
                <h1 className='coffee-house-card__title'>{selectedCoffeeHouse.name}</h1>
                <p>Some text about the coffee house...</p>
            </div>
            <div className="coffee-house-card__right">
                <div className="coffee-house-card__right__map-container">
                    <YMaps>
                        <Map defaultState={mapData} width='100%' height='100%'>
                            <Placemark geometry={placemarkGeometry} />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </div>
    );
}

export default CoffeeHouseCard;
