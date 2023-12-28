import React from "react";
import './InfoBlock.css';

function InfoBlock(props) {
    return (
        <div className='info-block'>
            <h3>{props.title}</h3>
            <div className='info-block__desc'>
                {props.desc}
            </div>
        </div>
    );
}

export default InfoBlock;
