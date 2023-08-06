import React from "react";
import './InputAuth.css';

const InputAuth = (props) => {
    return (
        <div className="input-group">
            <input className="input-group__input"
                onChange={(event) => props.setValue(event.target.value)}
                type={props.type} 
                value={props.value}  
                required={props.required}
                maxLength={props.maxLength}
            />
            <label className="input-group__label">{props.label}</label>
        </div>
    );
};


export default InputAuth;