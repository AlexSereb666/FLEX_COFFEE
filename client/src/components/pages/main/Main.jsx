import React from 'react';
import './Main.css';
import PhoneImg from '../../../assets/img/phone-icon.png';
import AddressImg from '../../../assets/img/address-icon.png';

function Main() {
  return (
    <div className='main-page'>
      <div className="main-page__content">
        <div className='main-page__info-block'>
            <div className='main-page__info-item'>
              <div className='main-page__info-icon-container'>
                <img src={PhoneImg} className='main-page__info-icon' alt='Phone Icon'/>
              </div>
              <div>
                <div className="main-page__info-title">Звоните по номеру телефона</div>
                <div className="main-page__info-content">+7 (951) 764-90-78</div>
              </div>
            </div>
            <div className='main-page__info-item'>
              <div className='main-page__info-icon-container'>
                <img src={AddressImg} className='main-page__info-icon' alt='Address Icon'/>
              </div>
              <div>
                <div className="main-page__info-title">Мы находимся</div>
                <div className="main-page__info-content">Г. БЕЛГОРОД УЛ. КОСТЮКОВА</div>
              </div>
            </div>
        </div>        
      </div>
    </div>
  );
}

export default Main;
