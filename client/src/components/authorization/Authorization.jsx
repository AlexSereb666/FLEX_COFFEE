import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputAuth from '../../utils/input-auth/InputAuth';
import ToggleCheckbox from '../../utils/toggle-Checkbox/ToggleCheckbox';
import Button from '../../utils/button/btn-form/BtnForm';
import './Authorization.css';
import { loginFunc } from '../../http/userAPI';
import { Context } from '../../index';
import MessageBox from '../messageBox/MessageBox';
import { PROFILE_ROUTE } from '../../utils/consts';
import { REGISTRATION_ROUTE } from '../../utils/consts';
import { observer } from 'mobx-react-lite'

const Authorization = observer (() => {
    const navigate = useNavigate();
    const [isClosing, setIsClosing] = useState(false);

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const [isCheckedPass, setIsCheckedPass] = useState(false)
    const [isCheckedSave, setIsCheckedSave] = useState(false)

    const { user } = useContext(Context)

    const [showMessageBox, setShowMessageBox] = useState(false);
    const [messageBoxMessage, setMessageBoxMessage] = useState("");

    const inAuth = async () => {
        if (!login) {
            setMessageBoxMessage(`Логин не указан`)
            setShowMessageBox(true)
        }
        else if (!password) {
            setMessageBoxMessage(`Пароль не указан`)
            setShowMessageBox(true)
        }
        else {
            try {
                const data = await loginFunc(login, password)
                console.log(data)
        
                user.setUser(user)
                user.setIsAuth(true)

                setLogin('')
                setPassword('')

                navigate(PROFILE_ROUTE)
            } catch (e) {
                setMessageBoxMessage(`${e.response.data.message}`)
                setShowMessageBox(true)
            }
        }
    }

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => navigate(-1), 200);
    }

    const handleCloseMessageBox = () => {
        // Закрываем всплывающее окно
        setShowMessageBox(false);
    }

    return (
        <div className='authorization'>
            <div className={`authorization__content ${isClosing ? 'closing' : ''}`}>
                <button className='authorization__close-btn' onClick={handleClose}>X</button>
                <h3 className='title'>Авторизация</h3>
                <InputAuth 
                    value={login} 
                    setValue={setLogin} 
                    type="text" 
                    required={true} 
                    label={'Login'}
                    maxLength={45}
                />
                <InputAuth
                    value={password} 
                    setValue={setPassword} 
                    type="password" 
                    required={true} 
                    label={'Password'}
                    maxLength={45}
                />
                <ToggleCheckbox 
                    label="Показать пароль" 
                    isChecked={isCheckedPass} 
                    onToggle={() => setIsCheckedPass(!isCheckedPass)} 
                />
                <ToggleCheckbox 
                    label="Запомнить меня" 
                    isChecked={isCheckedSave} 
                    onToggle={() => setIsCheckedSave(!isCheckedSave)} 
                />
                <Button
                    text={'Войти в аккаунт'}
                    onClick={inAuth}
                />
                <div className='authorization__register'>
                    <p>Нет аккаунта?&nbsp;
                        <span onClick={() => navigate(REGISTRATION_ROUTE)}>Зарегистрироваться</span>
                    </p>
                </div>
                {showMessageBox && (
                    <MessageBox message={messageBoxMessage} onClose={handleCloseMessageBox} />
                )}
            </div>
        </div>
    )
})

export default Authorization;
