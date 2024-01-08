import React, { useState } from 'react';
import './CreateType.css'
import InputCustom from '../../utils/input-auth/InputAuth'
import Btn from '../../utils/button/btn-form/BtnForm'
import MessageBox from '../messageBox/MessageBox';
import { createType } from '../../http/productAPI'

const CreateType = ({onClose}) => {
    const [textType, setTextType] = useState("")

    const [showModalMessageBox, setShowModalMessageBox] = useState(false);
    const [messageBoxMessage, setMessageBoxMessage] = useState("");

    const handleOpeneModalMessageBox = () => {
        setShowModalMessageBox(true);
    }

    const handleCloseModalMessageBox = () => {
        setShowModalMessageBox(false);
    }

    const addType = () => {
        if (textType.trim() === "") {
            setMessageBoxMessage("Введите название типа")
            handleOpeneModalMessageBox(true)
            return
        }

        createType({name: textType}).then(data => {
            setTextType("")
        })

        setMessageBoxMessage("Тип успешно добавлен")
        handleOpeneModalMessageBox(true)
    }

    return (
        <>
        <div className="overlay" />
        <div className="admin-menu-modal-password">
            <div className="admin-menu-modal-password__close-btn" onClick={onClose}>X</div>
            <InputCustom
                value={textType} 
                setValue={setTextType} 
                type="text" 
                required={true}
                label={'Введите тип продукта...'}
                maxLength={60}
            />
            <Btn
                text="Добавить тип"
                onClick={addType}
            />
        </div>
        {showModalMessageBox && (
            <MessageBox
                onClose={handleCloseModalMessageBox} 
                message={messageBoxMessage}
            />
        )}
        </>
    )
}

export default CreateType;
