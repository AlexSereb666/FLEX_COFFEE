import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Authorization.css';

function Authorization() {
    const navigate = useNavigate();
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => navigate(-1), 200);
    }

    return (
        <div className='authorization'>
            <div className={`authorization__content ${isClosing ? 'closing' : ''}`}>
                <button className='authorization__close-btn' onClick={handleClose}>X</button>
                <h2>Авторизация</h2>
            </div>
        </div>
    )
}

export default Authorization;
