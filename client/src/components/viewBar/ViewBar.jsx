import React, { useContext, useEffect } from 'react';
import './ViewBar.css';
import { observer } from 'mobx-react-lite'
import { Context } from '../../index';
import { fetchViews } from '../../http/productAPI';

const ViewBar = observer(() => {
    const { product } = useContext(Context);

    useEffect(() => {
        fetchViews().then(data => product.setViews(data))
    }, [])
    
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
