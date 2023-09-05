import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import InputAuth from '../../utils/input-auth/InputAuth';
import Button from '../../utils/button/btn-form/BtnForm';
import Country from '../../assets/img/Russia.jpg';
import MemesCat from '../../assets/video/memes_cat.mp4';
import mem from '../../assets/img/memes_cat.jpg';

function Registration() {
    const navigate = useNavigate();
    const [isClosing, setIsClosing] = useState(false);
    const [lineColor, setLineColor] = useState("gray")

    const [login, setLogin] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [passwordOne, setPasswordOne] = useState("")
    const [passwordTwo, setPasswordTwo] = useState("")
    
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => navigate(-1), 200);
    }

    const checkPasswordStrength = () => {
        const password = passwordOne;
        const hasLength = password.length >= 8; // Минимальная длина пароля
        const hasDigits = /[0-9]/.test(password); // Наличие цифр
        const hasUpperCase = /[A-Z]/.test(password); // Наличие больших букв
        const hasLowerCase = /[a-z]/.test(password); // Наличие маленьких букв
        const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password); // Наличие специальных символов
      
        if (hasLength && hasDigits && hasUpperCase && hasLowerCase && hasSpecialChars) {
          setLineColor("green"); // Если все критерии выполнены, пароль сильный
        } else if (hasLength && (hasDigits || hasUpperCase || hasLowerCase || hasSpecialChars)) {
          setLineColor("yellow"); // Если выполнены некоторые критерии, пароль средний
        } else {
          setLineColor("red"); // В остальных случаях пароль слабый
        }
    }      

    useEffect(() => {
        checkPasswordStrength()
    }, [passwordOne])

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
                        <img src={mem} alt='this cat =)' />
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
                        А где буквы?
                    </div>
                </div>
                <InputAuth 
                    value={email} 
                    setValue={setEmail} 
                    type="text" 
                    required={true} 
                    label={'Email*'}
                    maxLength={45}
                    mask={/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/}
                />
                <Button
                    text={'Зарегистрироваться'}
                />
            </div>
        </div>
    )
}

export default Registration;
