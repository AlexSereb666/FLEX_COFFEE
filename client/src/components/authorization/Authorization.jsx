import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputAuth from '../../utils/input-auth/InputAuth';
import ToggleCheckbox from '../../utils/toggle-Checkbox/ToggleCheckbox';
import Button from '../../utils/btn-form/BtnForm';
import './Authorization.css';

function Authorization() {
    const navigate = useNavigate();
    const [isClosing, setIsClosing] = useState(false);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [isCheckedPass, setIsCheckedPass] = useState(false)
    const [isCheckedSave, setIsCheckedSave] = useState(false)

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => navigate(-1), 200);
    }

    return (
        <div className='authorization'>
            <div className={`authorization__content ${isClosing ? 'closing' : ''}`}>
                <button className='authorization__close-btn' onClick={handleClose}>X</button>
                <h3>Авторизация</h3>
                <InputAuth 
                    value={email} 
                    setValue={setEmail} 
                    type="text" 
                    required={true} 
                    label={'Email address'}
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
                />
            </div>
        </div>
    )
}

export default Authorization;
