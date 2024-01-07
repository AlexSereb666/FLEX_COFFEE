import React, { useState } from 'react';
import './CreateType.css'
import InputCustom from '../../utils/input-auth/InputAuth'
import Btn from '../../utils/button/btn-form/BtnForm'

const CreateType = ({onClose}) => {
    const [textType, setTextType] = useState("")

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
            />
        </div>
        </>
    )
}

export default CreateType;
