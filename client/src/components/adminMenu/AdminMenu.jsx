import React, { useState } from 'react';
import './AdminMenu.css'
import BtnForm from '../../utils/button/btn-form/BtnForm'
import CreateProduct from '../createProduct/CreateProduct';
import CreateType from '../createType/CreateType';
import CreateView from '../createView/CreateView';

const AdminMenu = ({onClose}) => {

    const [showModalCreateProduct, setShowModalCreateProduct] = useState(false);
    const [showModalCreateType, setShowModalCreateType] = useState(false);
    const [showModalCreateView, setShowModalCreateView] = useState(false);

    const handleOpeneModalCreateProduct = () => {
        setShowModalCreateProduct(true);
    }

    const handleCloseModalCreateProduct = () => {
        setShowModalCreateProduct(false);
    }

    const handleOpeneModalCreateType = () => {
        setShowModalCreateType(true);
    }

    const handleCloseModalCreateType = () => {
        setShowModalCreateType(false);
    }

    const handleOpeneModalCreateView = () => {
        setShowModalCreateView(true);
    }

    const handleCloseModalCreateView = () => {
        setShowModalCreateView(false);
    }

    return (
        <>
        <div className="overlay" />
        <div className="admin-menu-modal-password">
            <div className="admin-menu-modal-password__close-btn" onClick={onClose}>X</div>
            <BtnForm
                text="Добавить продукт"
                onClick={handleOpeneModalCreateProduct}
            />
            <BtnForm
                text="Добавить тип"
                onClick={handleOpeneModalCreateType}
            />
            <BtnForm
                text="Добавить вид"
                onClick={handleOpeneModalCreateView}
            />
        </div>
        {showModalCreateProduct && (
            <CreateProduct
                onClose={handleCloseModalCreateProduct} 
            />
        )}
        {showModalCreateType && (
            <CreateType
                onClose={handleCloseModalCreateType} 
            />
        )}
        {showModalCreateView && (
            <CreateView
                onClose={handleCloseModalCreateView} 
            />
        )}
        </>
    )
}

export default AdminMenu;
