import React, { useState } from 'react';
import './CreateView.css'
import InputCustom from '../../utils/input-auth/InputAuth'
import Btn from '../../utils/button/btn-form/BtnForm'

const CreateView = ({onClose}) => {
    const [textView, setTextView] = useState("")

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
            />
        </div>
        </>
    )
}

export default CreateView;
