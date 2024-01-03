import React, { useState } from 'react';
import './EditProfileModalPassword.css';
import InputAuth from '../../utils/input-auth/InputAuth';
import Btn from '../../utils/button/btn-form/BtnForm'
import { observer } from 'mobx-react-lite'
import MessageBox from '../messageBox/MessageBox';
import { changePassword } from '../../http/userAPI';

const EditProfileModalPassword = observer(({ user, onClose }) => {
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [repNewPass, setRepNewPass] = useState("");

    const [showMessageBox, setShowMessageBox] = useState(false);
    const [messageBoxMessage, setMessageBoxMessage] = useState("");

    const changePass = async () => {
        if (oldPass.trim() === "" || newPass.trim() === "" || repNewPass.trim() === "") {
            setMessageBoxMessage("Все поля обязательны для заполнения!")
            setShowMessageBox(true)
            return
        }

        if (newPass !== repNewPass) {
            setMessageBoxMessage("Новые пароли не совпадают!")
            setShowMessageBox(true)
            return
        }

        const result = await changePassword(oldPass, newPass, user.id)
        setMessageBoxMessage(result)
        setShowMessageBox(true)

        setOldPass("")
        setNewPass("")
        setRepNewPass("")
    }

    const handleCloseMessageBox = () => {
        setShowMessageBox(false);
    }

    return (
        <>
        <div className="overlay" />
        <div className="edit-profile-modal-password">
            <div className="edit-profile-modal-password__close-btn" onClick={onClose}>X</div>
            <InputAuth
                label="Старый пароль"
                type="text"
                required={true}
                maxLength={45}
                value={oldPass} 
                setValue={setOldPass} 
            />
            <InputAuth
                label="Новый пароль"
                type="text"
                required={true}
                maxLength={45}
                value={newPass} 
                setValue={setNewPass}
            />
            <InputAuth
                label="Повторите пароль"
                type="text"
                required={true}
                maxLength={45}
                value={repNewPass} 
                setValue={setRepNewPass}
            />
            <Btn
                text={'Изменить пароль'}
                onClick={changePass}
            />
            {showMessageBox && (
                <MessageBox message={messageBoxMessage} onClose={handleCloseMessageBox} />
            )}
        </div>
        </>
    );
})

export default EditProfileModalPassword;
