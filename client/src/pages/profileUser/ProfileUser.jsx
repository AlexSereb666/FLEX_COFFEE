import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileUser.css';
import BtnForm from '../../utils/button/btn-form/BtnForm'
import defaultAvatar from '../../assets/img/cosmo.jpg'
import { jwtDecode } from 'jwt-decode'
import ModalEditPassword from '../../components/editProfileModalPassword/EditProfileModalPassword'
import ModalEditProfile from '../../components/editProfileModal/EditProfileModal'
import AdminMenu from '../../components/adminMenu/AdminMenu';
import { BASKET_ROUTE } from '../../utils/consts';
import Orders from '../../components/orders/Orders';

function ProfileUser() {
  const user = jwtDecode(localStorage.getItem('token'))

  const navigate = useNavigate()

  const [showModalEditPassword, setShowModalEditPassword] = useState(false);
  const [showModalEditProfile, setShowModalEditProfile] = useState(false);
  const [showAdminMenu, setShowAdminMenu] = useState(false);
  const [showModalOrders, setShowModalOrders] = useState(false);

  const handleCloseModalEditPassword = () => {
    setShowModalEditPassword(false);
  }

  const handleCloseAdminMenu = () => {
    setShowAdminMenu(false);
  }

  const handleOpenModalEditPassword = () => {
    setShowModalEditPassword(true);
  }

  const handleCloseModalEditProfile = () => {
    setShowModalEditProfile(false);
  }

  const handleOpenModalEditProfile = () => {
    setShowModalEditProfile(true);
  }

  const handleOpenAdminMenu = () => {
    setShowAdminMenu(true);
  }

  const handleOpenModalOrders = () => {
    setShowModalOrders(true);
  }

  const handleCloseModalOrders = () => {
    setShowModalOrders(false);
  }

  return (
    <div className="profile">
      <div className="profile__left-side">
        <div className="profile__one-left">
          <div className='profile__frame'>
            <img className='profile__img' src={defaultAvatar} alt='not img'/>
          </div>
          <BtnForm
              text="Редактировать аватар"
          />
        </div>
        <div className="profile__two-left">
          <span className='profile__title'>Логин: </span>
          <span className='profile__text'>{user.login}</span>
          <br/><br/><br/><br/>
          <span className='profile__title'>Email: </span>
          <span className='profile__text'>{user.email}</span>
          <br/><br/><br/><br/>
          <span className='profile__title'>Телефон: </span>
          <span className='profile__text'>{user.phone}</span>
          <br/><br/><br/><br/>
          <span className='profile__title'>Роль: </span>
          <span className='profile__text'>{user.role}</span>
          <br/><br/><br/><br/>
          <span className='profile__title'>FlexCount: </span>
          <span className='profile__text'>0</span>
          <div className="profile__white-fade"></div>
          <br/><br/><br/><br/>
        </div>
      </div>
      <div className="profile__right-side">
        <BtnForm
            text="Редактировать профиль"
            onClick={handleOpenModalEditProfile}
        />
        <BtnForm
            text="Сменить пароль"
            onClick={handleOpenModalEditPassword}
        />
        <BtnForm
            text="Моя корзина"
            onClick={() => navigate(BASKET_ROUTE)}
        />
        <BtnForm
            text="История покупок"
        />
        <BtnForm
            text="Мои комментарии"
        />
        <BtnForm
            text="Способ оплаты"
        />
        <br/>
        {user.role === 'ADMIN' && (
            <BtnForm
              text="Меню админа"
              onClick={handleOpenAdminMenu}
            />
        )}
        {user.role === 'BARISTA' && (
            <BtnForm
              text="Меню заказов"
              onClick={handleOpenModalOrders}
            />
        )}
      </div>
      {showModalEditPassword && (
        <ModalEditPassword
          user={user}
          onClose={handleCloseModalEditPassword} 
        />
      )}
      {showModalEditProfile && (
        <ModalEditProfile
          user={user}
          onClose={handleCloseModalEditProfile} 
        />
      )}
      {showAdminMenu && (
        <AdminMenu
          onClose={handleCloseAdminMenu} 
        />
      )}
      {showModalOrders && (
        <Orders
          onClose={handleCloseModalOrders} 
        />
      )}
    </div>
  );
}

export default ProfileUser;
