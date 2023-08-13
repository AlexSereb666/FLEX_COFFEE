import React from 'react';
import './Contacts.css';
import BestCoffeeImg from '../../../assets/img/best-coffee.png';

function Contacts() {
  return (
    <div className="main-contacts">
      
      <div className="main-contacts__right-section">
        <div className="main-contacts__contact-header">СВЯЖИТЕСЬ С НАМИ</div>
        <div className="main-contacts__contact-subsection">
          <h3>Контактные телефоны:</h3>
          <div className="main-contacts__white-fade"></div> 
          <p>+7 (951) 764-90-78</p>
          <p>+7 (951) 764-90-78</p>
        </div>
        <div className="main-contacts__contact-subsection">
          <h3>Местоположение:</h3>
          <div className='main-contacts__best-coffee'>
            <img src={BestCoffeeImg} alt=':('/>
          </div>
          <div className="main-contacts__white-fade"></div> 
          <p>г. Белгород, ул. Костюкова</p>
        </div>
        <div className="main-contacts__contact-subsection">
          <h3>Часы работы:</h3>
          <div className="main-contacts__white-fade"></div> 
          <p>Пн-Пт: 08:00 - 23:00</p>
          <p>Сб-Вс: 10:00 - 24:00</p>
        </div>
      </div>

      <div className="left-section">
        {/* левая часть */}
      </div>

    </div>
  );
}

export default Contacts;
