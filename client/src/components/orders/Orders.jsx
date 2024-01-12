import React, { useState, useEffect } from 'react';
import './Orders.css'
import DatetimePicker from '../../utils/datetimePicker/DatetimePicker';
import CustomCheckbox from '../../utils/customCheckbox/CustomCheckbox';
import Btn from '../../utils/button/btn-form/BtnForm'
import { getAllOrders, updateOrderStatus } from '../../http/orderAPI'
import { getUserById } from '../../http/userAPI'
import { fetchOneProduct } from '../../http/productAPI'
import CustomDropdown from '../../utils/customDropdown/CustomDropdown';

const Orders = ({onClose}) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [checkboxChecked, setCheckboxChecked] = useState(true);

    const [orderList, setOrderList] = useState([])
    const [users, setUsers] = useState({})
    const [products, setProducts] = useState({})
    const [selectedStatus, setSelectedStatus] = useState(null);

    const [sortOrder, setSortOrder] = useState("asc"); // "asc" для возрастания, "desc" для убывания

    const statusList = [
        {id: 1, name: 'В ожидании'},
        {id: 2, name: 'В работе'},
        {id: 3, name: 'Готов к получению'},
        {id: 4, name: 'Выполнен'},
        {id: 5, name: 'Отменен'},
    ]

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const formatDate = (date) => {
        const options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        };
      
        const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);
        return formattedDate;
    };

    const stripTimeFromDateBegin = (date) => {
        const strippedDate = new Date(date);
        strippedDate.setHours(0, 0, 0, 0)
        return strippedDate;
    };

    const stripTimeFromDateEnd = (date) => {
        const strippedDate = new Date(date);
        strippedDate.setHours(23, 59, 0, 0)
        return strippedDate;
    };

    const addUser = (userId, userData) => {
        setUsers(prevUsers => ({
          ...prevUsers,
          [userId]: userData,
        }));
    };

    const addProduct = (productId, productData) => {
        setProducts(prevProducts => ({
          ...prevProducts,
          [productId]: productData,
        }));
    };

    const handleCheckboxChange = isChecked => {
        setCheckboxChecked(isChecked);
    };

    const start = async () => {
        const data = await getAllOrders();
        setOrderList(data)

        const uniqueProductIds = [...new Set(data.map(item => item.productId))];
        const productsData = await Promise.all(uniqueProductIds.map(productId => fetchOneProduct(productId)));
        productsData.map(item => addProduct(item.id, item))

        const uniqueUserIds = [...new Set(data.map(item => item.userId))];
        const usersData = await Promise.all(uniqueUserIds.map(userId => getUserById(userId)));
        usersData.map(item => addUser(item.id, item))
    }

    useEffect(() => {
        start()
    }, [])

    useEffect(() => {
        if (selectedStatus != null) {
            updateOrderStatus(selectedStatus.orderId, selectedStatus.status)
            start()
        }
    }, [selectedStatus])

    return (
        <>
        <div className="overlay" />
        <div className="admin-menu-modal-order">
            <div className="admin-menu-modal-order__close-btn" onClick={onClose}>X</div>
            <div className="admin-menu-modal-order__menu">
                <div className="admin-menu-modal-order__menu__calendar">
                    <DatetimePicker
                        defaultDate={selectedDate}
                        onDateChange={handleDateChange}
                    />
                </div>
                <div className="admin-menu-modal-order__menu__checkbox">
                    <CustomCheckbox
                        onChangeSolo={handleCheckboxChange}
                        label="Показывать выполненные"
                    />
                </div>
                <div className="admin-menu-modal-order__menu__sort">
                    <Btn
                        text="Сортировать по времени"
                        onClick={() => {
                            setSortOrder(prevOrder => (prevOrder === "asc" ? "desc" : "asc"));
                        }}
                    />
                </div>
            </div>
            <div className="admin-menu-modal-order__result">
                {orderList
                    .filter(item => checkboxChecked || item.status !== 'Выполнен')
                    .sort((a, b) => {
                        const dateA = new Date(a.date);
                        const dateB = new Date(b.date);

                        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
                    })
                    .map(item => {
                        const user = users[item.userId] || {};
                        const product = products[item.productId] || {};

                        if (new Date(item.date) >= stripTimeFromDateBegin(selectedDate) 
                        && new Date(item.date) <= stripTimeFromDateEnd(selectedDate)) {
                            return (
                                <div className="admin-menu-modal-order__result__line" key={item.id}>
                                    <div className="admin-menu-modal-order__result__user">
                                        {user.login}
                                    </div>
                                    <div className="admin-menu-modal-order__result__img">
                                        <img src={process.env.REACT_APP_API_URL + product.img} alt="Нет изображения"/>
                                    </div>
                                    <div className="admin-menu-modal-order__result__product">
                                        {product.name}
                                    </div>
                                    <div className="admin-menu-modal-order__result__date">
                                        {formatDate(new Date(item.date))}
                                    </div>
                                    <div className="admin-menu-modal-order__result__combobox">
                                        <CustomDropdown
                                            options={statusList}
                                            onSelect={(value) => {
                                                setSelectedStatus({ orderId: item.id, status: value });
                                            }}
                                            text="Выберите статус"
                                            selectedItem={selectedStatus && selectedStatus.orderId === item.id ? selectedStatus.status : item.status}
                                        />
                                    </div>
                                </div>
                            );
                        }
                    })}
            </div>
        </div>
        </>
    )
}

export default Orders;
