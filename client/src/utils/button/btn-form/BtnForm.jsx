import React from "react";
import './BtnForm.css';

function BtnForm({ text, onClick }) {
    return (
        <button className="custom-button" onClick={onClick}>
            {text}
        </button>
    )
}

export default BtnForm;