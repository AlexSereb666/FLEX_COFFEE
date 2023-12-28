import React from "react";
import './CustomMap.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

function CustomMap(props) {
    return (
        <div className="map-container">
            <YMaps>
                <Map defaultState={props.mapData} width='100%' height='100%'>
                    <Placemark geometry={props.geometry} />
                </Map>
            </YMaps>
        </div>
    );
}

export default CustomMap;
