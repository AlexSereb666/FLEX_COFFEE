import React, { useState } from 'react';
import './Contacts.css';
import BestCoffeeImg from '../../../assets/img/best-coffee.png';
import { feedbackReq } from '../../../http/feedbackAPI';
import MessageBox from '../../messageBox/MessageBox';

function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  const [showMessageBox, setShowMessageBox] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    setEmailValid(emailRegex.test(e.target.value) && e.target.value.trim() !== '');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isNameValid = name.trim() !== '';
    const isEmailValid = emailValid && email.trim() !== '';
    const isMessageValid = message.trim() !== '';

    setNameValid(isNameValid);
    setEmailValid(isEmailValid);
    setMessageValid(isMessageValid);

    if (isNameValid && isEmailValid && isMessageValid) {
      const response = await feedbackReq(name, email, message)
      console.log(response)

      setShowMessageBox(true);

      setName('')
      setEmail('')
      setMessage('')
    } 
  }

  const handleCloseMessageBox = () => {
    // Закрываем всплывающее окно
    setShowMessageBox(false);
  }

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
      <div className="main-contacts__left-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameValid(true);
            }}
            style={{ borderColor: nameValid ? 'initial' : 'red' }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            style={{ borderColor: emailValid ? 'initial' : 'red' }}
          />
          <textarea
            placeholder="Ваше сообщение"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setMessageValid(true);
            }}
            style={{ borderColor: messageValid ? 'initial' : 'red' }}
          />
          <button type="submit">Отправить письмо</button>
        </form>
        {showMessageBox && (
          <MessageBox message="Сообщение успешно отправлено!" onClose={handleCloseMessageBox} />
        )}
      </div>
    </div>
  );
}

export default Contacts;
