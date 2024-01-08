import React, { useState } from 'react';
import './CreateView.css'
import InputCustom from '../../utils/input-auth/InputAuth'
import Btn from '../../utils/button/btn-form/BtnForm'
import MessageBox from '../messageBox/MessageBox';
import { createView } from '../../http/productAPI'

const CreateView = ({onClose}) => {
    const [textView, setTextView] = useState("")

    const [showModalMessageBox, setShowModalMessageBox] = useState(false);
    const [messageBoxMessage, setMessageBoxMessage] = useState("");

    const handleOpeneModalMessageBox = () => {
        setShowModalMessageBox(true);
    }

    const handleCloseModalMessageBox = () => {
        setShowModalMessageBox(false);
    }

    const addView = () => {
        if (textView.trim() === "") {
            setMessageBoxMessage("Введите название вида")
            handleOpeneModalMessageBox(true)
            return
        }

        createView({name: textView}).then(data => {
            setTextView("")
        })

        setMessageBoxMessage("Вид успешно добавлен")
        handleOpeneModalMessageBox(true)
    }

    return (
        <>
        <div className="overlay" />
        <div className="admin-menu-modal-password">
            <div className="admin-menu-modal-password__close-btn" onClick={onClose}>X</div>
            <InputCustom
                value={textView} 
                setValue={setTextView} 
                type="text" 
                required={true}
                label={'Введите вид продукта...'}
                maxLength={60}
            />
            <Btn
                text="Добавить вид"
                onClick={addView}
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

export default CreateView;
