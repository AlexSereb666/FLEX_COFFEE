import React, { useContext, useState, useEffect } from 'react';
import './CreateProduct.css'
import InputCustom from '../../utils/input-auth/InputAuth'
import Btn from '../../utils/button/btn-form/BtnForm'
import { Context } from '../../index'
import CustomDropdown from '../../utils/customDropdown/CustomDropdown';
import ImageUploader from '../../utils/imageUploader/ImageUploader';
import AddInfoProduct from '../addInfoProduct/AddInfoProduct';

const CreateProduct = ({onClose}) => {
    const { product } = useContext(Context)

    const [showModalAddInfo, setShowModalAddInfo] = useState(false);

    const handleOpeneModalAddInfo = () => {
        setShowModalAddInfo(true);
    }

    const handleCloseModalAddInfo = () => {
        setShowModalAddInfo(false);
    }

    // характеристики продукта //
    const [info, setInfo] = useState([])

    const handleUpdateInfo = (updatedInfo) => {
        setInfo(updatedInfo);
    };

    const [name, setName] = useState("")
    const [price, setPrice] = useState("0")
    const [rating, setRating] = useState("0")
    const [count, setCount] = useState("0")

    const [selectType, setSelectType] = useState("")
    const [selectView, setSelectView] = useState("")

    const [uploadedImage, setUploadedImage] = useState(null);

    const handleSelectType = (value) => {
        setSelectType(value)
        //console.log(selectType)
    };

    const handleSelectView = (value) => {
        setSelectView(value)
    };

    const handleImageUpload = (imageData) => {
        setUploadedImage(imageData);
    };

    useEffect(() => {
        //console.log(selectType);
    }, [selectType]);

    useEffect(() => {
        //console.log(selectView);
    }, [selectView]);

    useEffect(() => {
        if (rating < 0) {
            setRating("0")
        }
        if (rating > 5) {
            setRating("5")
        }
    }, [rating]);

    useEffect(() => {
        if (price < 0) {
            setPrice("0")
        }
    }, [price]);

    useEffect(() => {
        if (count < 0) {
            setCount("0")
        }
    }, [count]);

    return (
        <>
        <div className="overlay" />
        <div className="admin-menu-modal-password">
            <div className="admin-menu-modal-password__close-btn" onClick={onClose}>X</div>
            <InputCustom
                value={name} 
                setValue={setName} 
                type="text" 
                required={true}
                label={'Введите имя продукта...'}
                maxLength={60}
            />
            <InputCustom
                value={price} 
                setValue={setPrice}
                min={0}
                type="number" 
                required={true}
                label={'Введите цену продукта...'}
                maxLength={60}
            />
            <InputCustom
                value={rating} 
                setValue={setRating}
                max={5}
                min={0}
                type="number" 
                required={true}
                label={'Введите рейтинг продукта...'}
                maxLength={60}
            />
            <InputCustom
                value={count} 
                setValue={setCount}
                min={0}
                type="number" 
                required={true}
                label={'Введите количество продукта...'}
                maxLength={60}
            />
            <CustomDropdown
                options={product.views}
                onSelect={handleSelectView}
                text="Выберите вид"
            />
            <CustomDropdown
                options={product.types}
                onSelect={handleSelectType}
                text="Выберите тип"
            />
            <ImageUploader
                onUpload={handleImageUpload}
            />
            <Btn
                text="Описание продукта"
                onClick={handleOpeneModalAddInfo}
            />
            <Btn
                text="Добавить продукт"
            />
        </div>
        {showModalAddInfo && (
            <AddInfoProduct
                onClose={handleCloseModalAddInfo} 
                updateInfo={handleUpdateInfo}
                listInfo={info}
            />
        )}
        </>
    )
}

export default CreateProduct;
