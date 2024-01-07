import React, { useContext } from 'react';
import './ViewBar.css';
import { observer } from 'mobx-react-lite'
import { Context } from '../../index';

const ViewBar = observer(() => {
    const { product } = useContext(Context);
    return (
        <div className="view-bar">
            {product.views.map(view =>
                <div
                    className={`view-bar__view-item ${view.id === product.selectedView.id ? 'active' : ''}`}
                    onClick={() => product.setSelectedView(view)}
                    key={view.id}
                >
                    {view.name}
                </div>    
            )}
        </div>
    );
})

export default ViewBar;
