import React from 'react';
import './Main.css';
import PhoneImg from '../../assets/img/phone-icon.png';
import AddressImg from '../../assets/img/address-icon.png';
import VkImg from '../../assets/img/vk.png';
import InstImg from '../../assets/img/instagram.png';
import TwitterImg from '../../assets/img/twitter.png';
import TelegramImg from '../../assets/img/telegram.png';
import CoffeeBeans from '../../assets/img/coffee-beans.png';
import InformationBlock from '../../components/InformationBlock/InformationBlock';
import ButtonMain from '../../utils/button/main-page-btn/ButtonMain';
import SocialNetwork from '../../components/social-network/SocialNetwork';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_MENU_ROUTE } from '../../utils/consts';

function Main() {
  const navigate = useNavigate()

  return (
    <div className='main-page'>
      <div className="main-page__content">
        <div className='main-page__info-block'>
            <InformationBlock
              image={PhoneImg}
              title={'Звоните по номеру телефона'}
              text={'+7 (951) 764-90-78'}
            />
            <InformationBlock
              image={AddressImg}
              title={'Мы находимся'}
              text={'Г. БЕЛГОРОД УЛ. КОСТЮКОВА'}
            />
        </div>
        <div className="main-page__white-fade"></div> 
        <div className="main-page__titles">
            <h1 className="main-page__best">ЛУЧШИЙ</h1>
            <div className="main-page__coffee-beans">
              <img src={CoffeeBeans} alt="Coffee Beans" />
            </div>
            <h2 className="main-page__coffee">КОФЕ В ГОРОДЕ</h2>
            <p className="main-page__description">
              Мы входим в топ лучших кафе по городу. У нас вы сможете насладиться уютной атмосферой и ароматным кофе или заказать бесплатную доставку
            </p>
            <div className='main-page__buttons'>
              <SocialNetwork
                  image={TwitterImg}
                  onClick={() => console.log('Твиттер')}   
              />
              <SocialNetwork
                  image={TelegramImg}
                  onClick={() => console.log('Телеграм')}   
              />
              <SocialNetwork
                image={InstImg}
                onClick={() => console.log('Инстраграм')}   
              />
              <SocialNetwork
                image={VkImg}
                onClick={() => console.log('Вконтакте')}   
              />
              <ButtonMain
                text={'Оформить заказ'}
                onClick={() => navigate(PRODUCT_MENU_ROUTE)}
              />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
