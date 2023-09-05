import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar__menu'>
          <div className="navbar__left">
              <div className="navbar__item"><Link to="/coffeehouses" className="navbar__link">Кофейни</Link></div>
              <div className="navbar__item"><Link to="/" className="navbar__link">Отзывы</Link></div>
              <div className="navbar__item"><Link to="/" className="navbar__link">Меню</Link></div>
            </div>
            <div className="navbar__logo">
              <img src={logo} alt=""/>
            </div>
            <div className="navbar__right">
              <div className="navbar__item"><Link to="/" className="navbar__link">Заказы</Link></div>
              <div className="navbar__item"><Link to="/" className="navbar__link">О нас</Link></div>
              <div className="navbar__item"><Link to="/contacts" className="navbar__link">Контакты</Link></div>
            </div>
        </div>
        <div className='navbar__auth'>
          <Link to="/login" className="navbar__auth-link">Войти</Link>
          <Link to="/registration" className="navbar__auth-link">Регистрация</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
