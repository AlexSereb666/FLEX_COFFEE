import React from 'react';
import './CoffeeHouses.css';
import coffeeHousesImg_1 from '../../assets/img/coffee-houses-1.jpg';
import coffeeHousesImg_2 from '../../assets/img/coffee-houses-2.jpg';
import coffeeHousesImg_3 from '../../assets/img/coffee-houses-3.jpg';
import coffeeHousesImg_4 from '../../assets/img/coffee-houses-4.jpg';
import CoffeeHouseRectangle from '../../components/coffeeHouseRectangle/CoffeeHouseRectangle';

function CoffeeHouses() {
  const coffeeHousesData = [
    {
      to: '/coffeehouse/1',
      imageSrc: coffeeHousesImg_1,
      title: 'Coffee House 1',
      address: 'Address of Coffee House',
    },
    {
      to: '/coffeehouse/2',
      imageSrc: coffeeHousesImg_2,
      title: 'Coffee House 2',
      address: 'Address of Coffee House',
    },
    {
      to: '/coffeehouse/3',
      imageSrc: coffeeHousesImg_3,
      title: 'Coffee House 3',
      address: 'Address of Coffee House',
    },
    {
      to: '/coffeehouse/4',
      imageSrc: coffeeHousesImg_4,
      title: 'Coffee House 4',
      address: 'Address of Coffee House',
    },
  ];

  return (
    <div className="coffee-houses">
      {coffeeHousesData.map((coffeeHouse, index) => (
        <CoffeeHouseRectangle key={index} {...coffeeHouse} />
      ))}
    </div>
  );
}

export default CoffeeHouses;
