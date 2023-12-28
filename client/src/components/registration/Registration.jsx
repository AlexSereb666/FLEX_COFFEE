import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import InputAuth from '../../utils/input-auth/InputAuth';
import Button from '../../utils/button/btn-form/BtnForm';
import Country from '../../assets/img/Russia.jpg';
import mem from '../../assets/video/memes.mp4';
import mem_good from '../../assets/img/memes_good.jpg';
import { userRegistration } from '../../http/userAPI';
import MessageBox from '../messageBox/MessageBox';
import { LOGIN_ROUTE } from '../../utils/consts';
import { observer } from 'mobx-react-lite'

const Registration = observer(() => {
    const navigate = useNavigate();
    const [isClosing, setIsClosing] = useState(false);
    const [lineColor, setLineColor] = useState("gray");
    const [currentCheck, setCurrentCheck] = useState(null); // Состояние для текущего элемента checkList
    const [checkList, setCheckList] = useState([]);
    const [isStrongPassword, setIsStrongPassword] = useState(false); // Состояние для определения силы пароля

    const [login, setLogin] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [passwordOne, setPasswordOne] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");

    const [showMessageBox, setShowMessageBox] = useState(false);
    const [messageBoxMessage, setMessageBoxMessage] = useState("");

    const handleClose = async () => {
        setIsClosing(true);
        setTimeout(() => navigate(-1), 200);
    }

    const checkPasswordStrength = () => {
        const password = passwordOne;
        const hasLength = password.length >= 8; // Минимальная длина пароля
        const hasDigits = /[0-9]/.test(password); // Наличие цифр
        const hasUpperCase = /[A-Z]/.test(password); // Наличие больших букв
        const hasLowerCase = /[a-z]/.test(password); // Наличие маленьких букв
        // eslint-disable-next-line
        const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password); // Наличие специальных символов

        const newCheckList = [];

        if (!hasLength) {
            newCheckList.push("Пароль короткий");
        }
        if (!hasDigits) {
            newCheckList.push("А цифры где?");
        }
        if (!hasUpperCase) {
            newCheckList.push("Большие буквы будут?");
        }
        if (!hasLowerCase) {
            newCheckList.push("Маленьких букв нет");
        }
        if (!hasSpecialChars) {
            newCheckList.push("Спец. символы тоже нужны!");
        }

        if (hasLength && hasDigits && hasUpperCase && hasLowerCase && hasSpecialChars) {
            setLineColor("green"); // Если все критерии выполнены, пароль сильный
            newCheckList.push("Я горжусь тобой!");
            setIsStrongPassword(true); // Устанавливаем состояние как сильный пароль
        } else if (hasLength && (hasDigits || hasUpperCase || hasLowerCase || hasSpecialChars)) {
            setLineColor("yellow");
            newCheckList.push("Придумай получше");
            setIsStrongPassword(false); // Устанавливаем состояние как слабый пароль
        } else {
            setLineColor("red");
            newCheckList.push("Пароль слабый");
            setIsStrongPassword(false); // Устанавливаем состояние как слабый пароль
        }

        setCheckList(newCheckList);
    }

    useEffect(() => {
        checkPasswordStrength();
        // eslint-disable-next-line
    }, [passwordOne])

    useEffect(() => {
        let interval;

        if (checkList.length > 0) {
            interval = setInterval(() => {
                const randomIndex = Math.floor(Math.random() * checkList.length);
                setCurrentCheck(checkList[randomIndex]);
            }, 1300);
        } else {
            setCurrentCheck(null);
        }

        return () => clearInterval(interval);
    }, [checkList]);

    const registrationUser = async () => {

        if (!isStrongPassword) {
            setMessageBoxMessage('Ошибка! Некорректный пароль');
            setShowMessageBox(true);
            return false
        }
        if (passwordOne !== passwordTwo) {
            setMessageBoxMessage('Ошибка! Пароли не совпадают');
            setShowMessageBox(true);
            return false
        }
        if (!login || !phone || !email) {
            setMessageBoxMessage('Ошибка! Некорректно заполнены данные');
            setShowMessageBox(true);
            return false
        }

        const response = await userRegistration(login, passwordOne, email, phone, 'USER')

        // вернулся код ошибки //
        if (typeof response === 'number') {
            setMessageBoxMessage('Ошибка! Пользователь с такими данными уже существует!')
            setShowMessageBox(true)
        } else { // ошибок нет, все норм
            console.log(response)

            setMessageBoxMessage('Аккаунт успешно зарегистрирован!')
            setShowMessageBox(true)

            setLogin("")
            setPhone("")
            setEmail("")
            setPasswordOne("")
            setPasswordTwo("")
        }
    }

    const handleCloseMessageBox = () => {
        // Закрываем всплывающее окно
        setShowMessageBox(false);

        if (messageBoxMessage === 'Аккаунт успешно зарегистрирован!') {
            navigate(LOGIN_ROUTE)
        }
    }

    return (
        <div className='registration'>
            <div className={`registration__content ${isClosing ? 'closing' : ''}`}>
                <button className='registration__close-btn' onClick={handleClose}>X</button>
                <h3 className='registration__title'>Регистрация</h3>
                <InputAuth 
                    value={login} 
                    setValue={setLogin} 
                    type="text" 
                    required={true} 
                    label={'Login'}
                    maxLength={45}
                />
                <div className='registration__block-pass'>
                    <div className='registration__passwords'>
                        <InputAuth
                            value={passwordOne} 
                            setValue={setPasswordOne} 
                            type="text" 
                            required={true} 
                            label={'Create a password'}
                            maxLength={30}
                        />
                        <InputAuth
                            value={passwordTwo} 
                            setValue={setPasswordTwo} 
                            type="text" 
                            required={true} 
                            label={'Repeat password'}
                            maxLength={30}
                        />
                    </div>
                    <div className='registration__memas' style={{ 
                        borderWidth: '4px',
                        borderStyle: 'solid',
                        borderColor: lineColor,
                    }}>
                        {isStrongPassword ? (
                            <img src={mem_good} alt="Good Password" />
                        ) : (
                            <video autoPlay loop muted>
                                <source src={mem} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                </div>
                <div className='registration__container-phone'>
                    <div>
                        <InputAuth 
                            value={phone} 
                            setValue={setPhone} 
                            type="text" 
                            required={true} 
                            label={'Phone'}
                            maxLength={45}
                            mask="+7 (999) 999-99-99"
                        />
                    </div>
                    <div className='registration__container-phone__country'>
                        <img src={Country} alt='dont found country'/>
                    </div>
                    <div className='registration__container-phone__text'>
                        {currentCheck}
                    </div>
                </div>
                <InputAuth 
                    value={email} 
                    setValue={setEmail} 
                    type="text" 
                    required={true} 
                    label={'Email'}
                    maxLength={45}
                    mask={/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/}
                />
                <Button
                    text={'Зарегистрироваться'}
                    onClick={registrationUser}
                />
                {showMessageBox && (
                    <MessageBox message={messageBoxMessage} onClose={handleCloseMessageBox} />
                )}
            </div>
        </div>
    )
})

export default Registration;
