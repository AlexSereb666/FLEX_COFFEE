import React from 'react';
import './CoffeeHouses.css';
import coffeeHousesImg_1 from '../../../assets/img/coffee-houses-1.jpg';
import coffeeHousesImg_2 from '../../../assets/img/coffee-houses-2.jpg';
import coffeeHousesImg_3 from '../../../assets/img/coffee-houses-3.jpg';
import coffeeHousesImg_4 from '../../../assets/img/coffee-houses-4.jpg';
import chainImg from '../../../assets/img/chain.png';

function CoffeeHouses() {
  return (
    <div className="coffee-houses">
      <div className="house-wrapper">
        <img className="chain-left" src={chainImg} alt="Chain left"/>
        <img className="chain-right" src={chainImg} alt="Chain right"/>
        <div className="coffee-houses__houses">
          <img src={coffeeHousesImg_1} alt="Coffee House 1"/>
          <div className="house-info">
            <h3>Coffee House 1</h3>
            <p>Address of Coffee House</p>
          </div>
        </div>
      </div>

      <div className="house-wrapper">
        <img className="chain-left" src={chainImg} alt="Chain left"/>
        <img className="chain-right" src={chainImg} alt="Chain right"/>
        <div className="coffee-houses__houses">
          <img src={coffeeHousesImg_2} alt="Coffee House 2"/>
          <div className="house-info">
            <h3>Coffee House 2</h3>
            <p>Address of Coffee House</p>
          </div>
        </div>
      </div>

      <div className="house-wrapper">
        <img className="chain-left" src={chainImg} alt="Chain left"/>
        <img className="chain-right" src={chainImg} alt="Chain right"/>
        <div className="coffee-houses__houses">
          <img src={coffeeHousesImg_3} alt="Coffee House 3"/>
          <div className="house-info">
            <h3>Coffee House 3</h3>
            <p>Address of Coffee House</p>
          </div>
        </div>
      </div>

      <div className="house-wrapper">
        <img className="chain-left" src={chainImg} alt="Chain left"/>
        <img className="chain-right" src={chainImg} alt="Chain right"/>
        <div className="coffee-houses__houses">
          <img src={coffeeHousesImg_4} alt="Coffee House 4"/>
          <div className="house-info">
            <h3>Coffee House 4</h3>
            <p>Address of Coffee House</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeHouses;
