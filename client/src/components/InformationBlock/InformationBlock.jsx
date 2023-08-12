import React from 'react';
import './InformationBlock.css';

function InformationBlock(props) {
    return (
        <div className='information-block'>
            <div className='information-block__info-icon-container'>
                <img src={props.image} className='information-block__info-icon' alt='Phone Icon'/>
            </div>
            <div>
                <div className="information-block__info-title">{props.title}</div>
                <div className="information-block__info-content">{props.text}</div>
            </div>
        </div>
    )
}

export default InformationBlock;
