import React, { useState } from 'react';
import { observer } from 'mobx-react-lite'
import MessageBox from '../messageBox/MessageBox';
import InputAuth from '../../utils/input-auth/InputAuth';
import Btn from '../../utils/button/btn-form/BtnForm'
import './EditProfileModal.css'
import { changeProfile } from '../../http/userAPI';

const EditProfileModal = observer(({ user, onClose }) => {

    const [newLogin, setNewLogin] = useState(user.login);
    const [newEmail, setNewEmail] = useState(user.email);
    const [newPhone, setNewPhone] = useState(user.phone);

    const [showMessageBox, setShowMessageBox] = useState(false);
    const [messageBoxMessage, setMessageBoxMessage] = useState("");

    const handleCloseMessageBox = () => {
        setShowMessageBox(false);
    }

    const changeProfileFunc = async () => {
        if (newLogin.trim() === "" || newEmail.trim() === "" || newPhone.trim() === "") {
            setMessageBoxMessage("Все поля обязательны для заполнения!")
            setShowMessageBox(true)
            return
        }
        const result = await changeProfile(newLogin, newEmail, newPhone, user.id)
        setMessageBoxMessage(result)
        setShowMessageBox(true)

        setNewLogin(user.login)
        setNewEmail(user.email)
        setNewPhone(user.phone)
    }

    return (
        <>
        <div className="overlay" />
        <div className="edit-profile-modal-password">
            <div className="edit-profile-modal-password__close-btn" onClick={onClose}>X</div>
            <InputAuth
                label="Логин"
                type="text"
                required={true}
                maxLength={45}
                value={newLogin} 
                setValue={setNewLogin} 
            />
            <InputAuth
                label="Email"
                type="text"
                required={true}
                maxLength={45}
                value={newEmail} 
                setValue={setNewEmail}
                mask={/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/}
            />
            <InputAuth
                label="Телефон"
                type="text"
                required={true}
                maxLength={45}
                value={newPhone} 
                setValue={setNewPhone}
                mask="+7 (999) 999-99-99"
            />
            <Btn
                text={'Изменить данные'}
                onClick={changeProfileFunc}
            />
            {showMessageBox && (
                <MessageBox message={messageBoxMessage} onClose={handleCloseMessageBox} />
            )}
        </div>
        </>
    )

})

export default EditProfileModal;
