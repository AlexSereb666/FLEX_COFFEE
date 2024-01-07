import React, { useContext } from 'react';
import './TypeBar.css';
import { observer } from 'mobx-react-lite'
import { Context } from '../../index';

const TypeBar = observer(() => {
    const { product } = useContext(Context);
    return (
        <div className="type-bar">
            {product.types.map(type =>
                <div 
                    className={`type-bar__type-item ${type.id === product.selectedType.id ? 'active' : ''}`}
                    onClick={() => product.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </div>    
            )}
        </div>
    );
})

export default TypeBar;
