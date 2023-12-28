import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import backetIcon from '../../assets/img/backet.png'
import avatarDefault from '../../assets/img/cosmo.jpg'
import exitIcon from '../../assets/img/exit.png'
import './Navbar.css'
import { Context } from '../../index';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, CONTACT_ROUTE, COFFEE_HOUSES_ROUTE, 
  PROFILE_ROUTE } from '../../utils/consts';
import { observer } from 'mobx-react-lite'

const Navbar = observer(() => {
  const { user } = useContext(Context)

  const navigate = useNavigate()

  const logOut= () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token');
    navigate('/')
  }

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar__menu'>
          <div className="navbar__left">
              <div className="navbar__item"><Link to={COFFEE_HOUSES_ROUTE} className="navbar__link">Кофейни</Link></div>
              <div className="navbar__item"><Link to="/" className="navbar__link">Отзывы</Link></div>
              <div className="navbar__item"><Link to="/" className="navbar__link">Меню</Link></div>
            </div>
            <div className="navbar__logo">
              <img src={logo} alt=""/>
            </div>
            <div className="navbar__right">
              <div className="navbar__item"><Link to="/" className="navbar__link">Заказы</Link></div>
              <div className="navbar__item"><Link to="/" className="navbar__link">О нас</Link></div>
              <div className="navbar__item"><Link to={CONTACT_ROUTE} className="navbar__link">Контакты</Link></div>
            </div>
        </div>
        <div className='navbar__auth'>
          {!!localStorage.getItem('token') ? (
            <>
              <Link><img className='navbar__basket-img' src={backetIcon} alt="Basket_img" /></Link>
              <Link to={PROFILE_ROUTE} ><img className='navbar__avatar-img' src={avatarDefault} alt="Avatar_img" /></Link>
              <img className='navbar__exit-img' src={exitIcon} alt="Exit_img" onClick={() => logOut()} />
            </>
          ) : (
            <>
              <Link to={LOGIN_ROUTE} className="navbar__auth-link">Войти</Link>
              <Link to={REGISTRATION_ROUTE} className="navbar__auth-link">Регистрация</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
})

export default Navbar;
